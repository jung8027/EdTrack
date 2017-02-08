"use strict";

module.exports = (sequelize, DataTypes) => {
	const Topic = sequelize.define("Topic", {
			name: {
				type: DataTypes.STRING,
				validate: {notEmpty: true}
			}
		}
	);
	return Topic;
};

