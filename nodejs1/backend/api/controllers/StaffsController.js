/**
 * StaffsController
 *
 * @description :: Server-side logic for managing staffs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    staff_upload_avatar: function (req, res) {
        req.file('avatar').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/avatar')
        }, function (err, uploadedFiles) {
            if (err) return console.log(err);
            console.log(uploadedFiles)
            if(uploadedFiles.length > 0){
                var avatar = require('path').basename(uploadedFiles[0].fd);
                return res.json({
                    status:'success',
                    message: 'Upload avatar thành công',
                    avatar: avatar
                });
            }
        });
    }
};
