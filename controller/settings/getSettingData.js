const GetSettingDataModel = require("../../models/settings/GetSettingdataModel");

exports.getsettingdata = (req,res) => {
  GetSettingDataModel.Getsettingdata(req,(err, data) => {
    if (err)
      res.status(500).send({
        success: "false",
        message: err.message || "error",
      });
    else
      res.status(200).send({
        success: "true",
        data: data,
      });
  });
};
