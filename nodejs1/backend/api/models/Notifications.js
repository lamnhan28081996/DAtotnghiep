/**
 * Notifications.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
 
        notification_id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
        },
        notification_position_id: {
          type: 'integer'
        },
        notification_name: {
          type: 'string',
          unique: true
        },
        notification_content: {
          type: 'string',
          size: 100
        },
        notification_date: {
          type: 'date',
        },
  }
};
