const { getEnumType } = require("./enum");
const { calops } = require("./calculationsOperation");

function getcalfunc(req, res) {
  const slackUsername = "paulocodes";
  const result = calops(req);
  const operation_type = getEnumType(req.body.operation_type);
  if (!operation_type) {
    return res.status(400).json({
      slackUsername,
      error: [
        "addition",
        "add",
        "sum",
        "plus",
        "summation",
        "subtract",
        "difference",
        "minus",
        "subtraction",
        "multiply",
        "product",
        "times",
        "multiplication",
      ],
    });
  }
  if (!result) {
    return res.status(400).json({
      slackUsername,
      error: "Input Specified Should Be An Integer",
    });
  }
  return res.status(200).json({
    slackUsername,
    result,
    operation_type,
  });
}

module.exports = getcalfunc;
