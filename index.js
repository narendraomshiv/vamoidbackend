const express = require("express");
const sql = require("./config/dbConnection");
const Users = require('./controller/settings/users');
const Country = require('./controller/country')
const State = require('./controller/state');
const City = require('./controller/city');
const GetSettingData = require("./controller/settings/getSettingData");
const ResetPassword = require("./controller/resetPassword");
const ManageAdmins = require("./controller/ManageAdmin/manageadmins");
const GetAdminAppUser = require("./controller/ManageAdmin/getAdminAppuser")
const ManageAdminDetails = require("./controller/ManageAdmin/manageadminsdetails")
const GetMerchantapplist = require("./controller/ManageAdmin/getMerchantApplist")
const ManageUpdateAdmin = require("./controller/ManageAdmin/manageEditAdmin");
const ManageMerchants = require("./controller/ManageMerchants/manageMerchants");
const getAdminApplication = require('./controller/ManageAdmin/getAdminApplication')
const AddMerchants = require("./controller/ManageMerchants/AddMerchants")
const ManageMerchantDetails = require("./controller/ManageMerchants/ManageMerchantsDetails")
const EditMerchantData = require("./controller/ManageMerchants/editMerchant");
const DeleteMerchantData = require("./controller/ManageMerchants/deleteMerchantData")
const getMerchantApp = require('./controller/ManageMerchants/getMerchantApp')
const ManageAdminsDelete = require("./controller/ManageAdmin/manageadminsdelete");
const Addadmin = require("./controller/ManageAdmin/addAdmin");
const GetAdminMerchantData = require('./controller/ManageAdmin/getMerchantData')
const CreateFaq = require("./controller/FAQ/createFaq");
const ReadFaq = require("./controller/FAQ/readfaq");
const GetFaqdata = require("./controller/FAQ/getfaq");
const UpdateFaqData = require("./controller/FAQ/updateFaq");
const DeleteFaqData = require("./controller/FAQ/deleteFaq");
const ContactInquiries = require("./controller/contactInquiries/inquiries");
const DeleteInquiries = require("./controller/contactInquiries/deleteInquiries");
const CreateTerms = require("./controller/terms&services/termServices");
const GetTerms = require("./controller/terms&services/getTerms");
const createPrivacyPolicy = require("./controller/privacy&policy/createPrivacy"); 
const getPrivacyPolicy = require("./controller/privacy&policy/getPrivacy");
const SendNotifications = require("./controller/notifications/sendNotification");
const getNotifications = require("./controller/notifications/getnotifications");
const DeleteNotifications = require("./controller/notifications/deletenotifications");
const Createsubscriptionsplan = require("./controller/Subscriptionplan/createsubscription");
const CreateContactDetails = require("./controller/contactdetails/createContact");
const GetContactDetails = require("./controller/contactdetails/getContactDetails");
const GetNotificationsDetails = require("./controller/notifications/getNotificationdetails");
const GetContactInquiries = require("./controller/contactInquiries/getContactInquiries");
const ReceiveNotificatons = require("./controller/notifications/receiveNotification");
const RemoveReceiveNotifications = require("./controller/notifications/removeReceive Notifications");
const GetSubscription = require("./controller/Subscriptionplan/getsubscription");
const DeleteSubscription = require("./controller/Subscriptionplan/deleteSubscription");
const EditSubscription = require("./controller/Subscriptionplan/editsubscription");
const ReadSubcription = require("./controller/Subscriptionplan/readsubscription");
const UpdateSubscriptionStatus = require("./controller/Subscriptionplan/updateStatus")
const ForgetPassword = require("./controller/forgotPassword")


//Admin
const SendInquiry = require("././vemo-id-backend-admin/controller/contactus/sendInquiry")
const GetAdminSendData = require("./vemo-id-backend-admin/controller/notifications/getAdminSendNotification")
const GetAdminNotification = require("./vemo-id-backend-admin/controller/notifications/getAdminData")
const RemoveAdminNotification = require("./vemo-id-backend-admin/controller/notifications/removeAdminNotification")
const SendAdminNotification = require("./vemo-id-backend-admin/controller/notifications/sendAdminNotification")
const DeleteSendNotification = require("./vemo-id-backend-admin/controller/notifications/deleteSendNotification")
const GetAdminSendDetails = require("./vemo-id-backend-admin/controller/notifications/getAdminSendNotificationDetails")
const AddAdminMerchant = require("./vemo-id-backend-admin/controller/ManageMerchant/addMerchant")
const GetMerchantDetails = require("./vemo-id-backend-admin/controller/ManageMerchant/merchantDetails")
const GetMerchant = require("./vemo-id-backend-admin/controller/ManageMerchant/getMerchant")
const EditMerchant = require("./vemo-id-backend-admin/controller/ManageMerchant/editMerchant")
const DeleteMerchant = require("./vemo-id-backend-admin/controller/ManageMerchant/merchantDelete")
const AddEnduser = require("./vemo-id-backend-admin/controller/MangeEnduser/addEnduser")
const GetEndUserData = require("./vemo-id-backend-admin/controller/MangeEnduser/getEndUser")
const getSubscriptionPlan = require("./vemo-id-backend-admin/controller/Subscription/getSubscription")

//merchant
const SendMerchantNotification = require("./vemo-id-backend-merchant/contorller/notification/sendnotification")
const GetMerchantData = require("./vemo-id-backend-merchant/contorller/notification/getMerchant")
const GetMerchantSendData = require("./vemo-id-backend-merchant/contorller/notification/getMerchantSendNotificaton")
const CreateApplicaton = require("./vemo-id-backend-merchant/contorller/ManageApplication/createApplication")
const GetAppData = require("./vemo-id-backend-merchant/contorller/ManageApplication/getAppData")
const GetApplicationDetail = require("./vemo-id-backend-merchant/contorller/ManageApplication/getApplicationDetail")
const ApplicationDelete = require('./vemo-id-backend-merchant/contorller/ManageApplication/applicationDelete')
const EditApplication = require('./vemo-id-backend-merchant/contorller/ManageApplication/editApplication')
const AddMetaData = require('./vemo-id-backend-merchant/contorller/ManageApplication/addMetaDeta')
const GetMetaData = require('./vemo-id-backend-merchant/contorller/ManageApplication/getMetaData')
const EditMetaData = require('./vemo-id-backend-merchant/contorller/ManageApplication/editMetaData')
const getEditMetaData = require('./vemo-id-backend-merchant/contorller/ManageApplication/getEditMetaData')
const DeleteMetaData = require('./vemo-id-backend-merchant/contorller/ManageApplication/DeleteMetaData')
const GetAppuserlist = require('./vemo-id-backend-merchant/contorller/ManageApplication/getAppusers')
const cors = require("cors");
const app = express();
const Port = 5000;
const bcrypt = require('bcryptjs');
const md5Hash = require('crypto-js');



app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {
  // bcrypt.genSalt(10, function(err, salt) {
  //   bcrypt.hash(req.body.newPassword, salt, function(err, hash) {
  //       console.log(hash); 
  //    });
  // });
  
  if (!req.body.login && req.body.login == null) {
    return res.status(400).send({
      success: "false",
      msg: "email  is empty!",
    });
  }
  if (!req.body.password && req.body.password == null) {
    return res.status(400).send({
      success: "false",
      msg: "password is empty!",
    });
  }
  var encryptPassowrd = md5Hash.MD5(req.body.password);
  //`SELECT * FROM tbl_users WHERE email = ${sql.escape(req.body.login)} AND password=${(encryptPassowrd)}`
  sql.query(
    'SELECT * FROM tbl_users WHERE password="'+ encryptPassowrd +'" AND email ="'+req.body.login+'"',
    (err, result) => {
     // console.log(result);
      // user does not exists
      if (err) {
        throw err; 
        return res.status(400).send({
          msg: err,
        });
      }
      if (!result.length) {
        return res.status(401).send({
          success: "false",
          msg: "Email or password is incorrect!",
        });
      } 
      else{
        return res.status(200).send({
                  success:'true',
                  msg: 'Login Successfully!',
                  user: result[0]
                });
      }

      

    }
  );
});



app.post('/updateadmin',Users.userEdit);
app.post("/getsettingsdata",GetSettingData.getsettingdata)
app.get('/countriesList', Country.countriesList);
app.post('/statesList', State.statesList);
app.post('/citiesList', City.citiesList);
app.post('/resetpassword',ResetPassword.userResetPassword);
app.get('/manageadmins',ManageAdmins.manageAdminList);
app.post('/getadminapplicationlist',getAdminApplication.getAdminapp)
app.post('/manageadmindetails',ManageAdminDetails.manageAdminDetails);
app.post('/get-app-user',GetAdminAppUser.getAppuser)
app.post('/getmerchantapplist',GetMerchantapplist.getMerchantapp)
app.post('/manageupdateadmin', ManageUpdateAdmin.manageEditAdmin);
app.post("/admindatadelete",ManageAdminsDelete.manageAdminDelete);
app.post("/addadmin",Addadmin.admindata)
app.post('/admin/getmerchantdata', GetAdminMerchantData.getMerchantsData)
app.post("/managemerchants",ManageMerchants.manageMerchantsList);
app.post("/managemerchantsdetails",ManageMerchantDetails.manageMerchantDetails);
app.post("/admin/getmerchantapplist", getMerchantApp.getmerchantapplist)
app.post("/addmerchants",AddMerchants.addMerchant);
app.post("/editmerchant",EditMerchantData.editmerchantdata);
app.post("/deletemerchant",DeleteMerchantData.deletemerchantdata);
app.post("/createfaq",CreateFaq.cretefaqq )
app.get("/readfaq",ReadFaq.readfaq );
app.post("/getFaqDetails", GetFaqdata.getfaq);
app.put("/updatefaqdata",UpdateFaqData.updatefaq);
app.post("/deletefaqdata",DeleteFaqData.deletefaq);
app.post("/deleteinquiriesdata",DeleteInquiries.deleteinquiries);
app.get("/getprivacypolicy",getPrivacyPolicy.getprivacy);
app.get("/gettermsandservices", GetTerms.getterms);
app.post("/createtermsandservices",CreateTerms.createterms)
app.post("/createprivacy",createPrivacyPolicy.createprivacy)
app.get("/contactinquiries",ContactInquiries.inquirieslist);
app.post("/sendnotification",SendNotifications.sendnotifications);
app.post("/getnotifications",getNotifications.getnotification);
app.post("/getnotificationsdetails",GetNotificationsDetails.getnotificationdetails)
app.post("/deletenotifications",DeleteNotifications.deletenotifications);
app.get("/receivenotificatons",ReceiveNotificatons.receivenotification);
app.post("/removereceivenotifications",RemoveReceiveNotifications.removereceivenotifications);
app.post("/createsubscriptionsplan",Createsubscriptionsplan.createsubscription);
app.get("/getsubscriptions",GetSubscription.getsubscription);
app.post("/deletesubscription",DeleteSubscription.deletesubscription);
app.post("/editsubscription",EditSubscription.editsubcription);
app.post("/readsubscription",ReadSubcription.readsubscription);
app.post("/updateSubscriptionStatus",UpdateSubscriptionStatus.updatestatus);
app.post("/createcontactdetails", CreateContactDetails.createcontact);
app.get("/getcontactdetails", GetContactDetails.getcontact);
app.post("/getinquiriesdetails",GetContactInquiries.getinquirieslist);
app.post("/forgetpassword",ForgetPassword.forgetpassword)


// vemo-id-backend-Admin 
app.post("/sendinquiry",SendInquiry.sendinquiry)
app.post("/getadminnotification", GetAdminNotification.getadmindata);
app.post("/removeadminnotification",RemoveAdminNotification.removeadminnotifications);
app.post("/sendadminnotification",SendAdminNotification.sendadminnotification);
app.post("/getadminsendnotification",GetAdminSendData.getadminsenddata);
app.post("/deletesendnotification",DeleteSendNotification.deletesendnotifications);
app.post("/getadminsendnotificationdetails",GetAdminSendDetails.getadminnotificationdetails);
app.post("/addadminmerchant",AddAdminMerchant.addAdminMerchant);
app.post("/getmerchantdetails", GetMerchantDetails.getmerchantdetails);
app.post("/getmerchant",GetMerchant.getmerchantdata);
app.post("/admin/editmerchant",EditMerchant.editmerchantdata);
app.post("/admin/deletemerchant",DeleteMerchant.merchantDataDelete);
app.post("/admin/add-end-user",AddEnduser.addEnduser);
app.post("/admin/get-enduser-data",GetEndUserData.getEnduserData)
app.get("/get-subscription-plan", getSubscriptionPlan.getsubscriptionplan)



//vemo-id-backend-Merchant
app.post("/sendmerchantnotification",SendMerchantNotification.sendmerchantnotification);
app.post("/getmerchantnotification",GetMerchantData.getmerchantdata);
app.post("/getmerchantsendnotification",GetMerchantSendData.getmerchantsendnotification);
app.post("/merchant/create-application",CreateApplicaton.createApplication);
app.post("/merchant/getappuserdata", GetAppData.getappuserdata)
app.post("/merchant/getapplicationdetail",GetApplicationDetail.getApplicationDetail)
app.post("/merchant/application-delete",ApplicationDelete.applicationDelete)
app.post("/merchant/edit-application",EditApplication.editApplication)
app.post("/addmetadata",AddMetaData.addmetadata)
app.post("/getmetadata",GetMetaData.getmetadata)
app.post("/editmetadata", EditMetaData.editMetaData)
app.post("/get-editmeta-data", getEditMetaData.GetEditMetaData)
app.post("/delete-meta-data",DeleteMetaData.deleteMetaData)
app.post("/get-appuserlist",GetAppuserlist.getAppUserList)






app.listen(Port, () => {
  console.log(`Server run on ${Port} successfully`);
});





//http://localhost:5000/statesList
//http://localhost:5000/countriesList
//http://localhost:5000/citiesList
//http://localhost:5000/resetpassword
//http://localhost:5000/getusersdata
//http://localhost:5000/submit
//http://localhost:5000/manageadmins
//http://localhost:5000/managemerchants