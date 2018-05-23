/**
 * NotificationsController
 *
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const moment = require('moment');
module.exports = {
    notification_add: function (req, res) {
        var notification_position_id = req.param('notification_position_id'),
            notification_name = req.param('notification_name'),
            notification_content = req.param('notification_content'),
            notification_date = req.param('notification_date');

        if (!notification_position_id){
            return res.json({
                status: 'error',
                message: 'Bạn chưa chọn chức vụ !'
            });
            return;
        }

        if (!notification_name || notification_name === ''){
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập vào tên thông báo !'
            });
            return;
        }
        if (!notification_content || notification_content === ''){
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập nội dung của thông báo !'
            });
            return;
        }
        if (!notification_date || notification_date === ''){
            return res.json({
                status: 'error',
                message: 'Bạn chưa chọn ngày đăng của thông báo !'
            });
            return;
        }
        let db = notification_date.split('/')[2] + "-" + notification_date.split('/')[1] + "-" + notification_date.split('/')[0]
        notification_date = moment(db).format('YYYY-MM-DD')
        Notifications.create({
            notification_position_id,
            notification_name,
            notification_content,
            notification_date
        }).exec(function(err, create){{
            if(err){
                return console(err)
            }
            if(create){
                return res.json({
                    status: 'success',
                    message: 'Thêm thông báo thành công !'
                })
            }
        }});
      
    },
    list_notification: function(req, res){
        var sql = 'SELECT notifications.notification_id, notifications.notification_position_id, notifications.notification_name, notifications.notification_content, notifications.notification_date, notifications.createdAt, positions.position_name AS notifications_opsition_name FROM notifications LEFT JOIN positions ON notifications.notification_position_id = positions.position_id'
        Notifications.query(sql, function(error, results){
            if(error){return console.log(err)}
            return res.json({
                status:'success',
                message: 'GET danh sách thông tin thành công !',
                notifications: results
            });
        });
    }
};

