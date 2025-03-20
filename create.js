import { readFile, writeFile, mkdirSync, existsSync } from "fs";

function createProblem(problemId, functionName) {
  const fileName = functionName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  if (!existsSync(`${problemId}`)) {
    mkdirSync(`${problemId}`);
  }

  readFile("0/index.ts", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/TEMPLATE/g, functionName);

    writeFile(`${problemId}/${fileName}.ts`, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });

  readFile("0/index.spec.ts", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/TEMPLATE/g, functionName);
    var result = result.replace(/index/g, fileName);

    writeFile(
      `${problemId}/${fileName}.spec.ts`,
      result,
      "utf8",
      function (err) {
        if (err) return console.log(err);
      }
    );
  });
}

if (process.argv.length != 4) {
  console.log("wrong usage!!");
  console.log("node create.js <PROBLEM_ID> <FUNCTION_NAME>");
} else {
  const problemId = process.argv[2];
  const functionName = process.argv[3];

  console.log(`creating PROBLEM_ID=${problemId} FUNCTION_NAME=${functionName}`);
  createProblem(problemId, functionName);
}
