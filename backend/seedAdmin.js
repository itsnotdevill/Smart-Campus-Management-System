const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const colors = require('colors'); // Removed dependency
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        const adminEmail = 'admin@campus.com';

        // Check if admin exists
        let adminUser = await User.findOne({ email: adminEmail });

        if (adminUser) {
            console.log('Admin user found. Updating password...');
            // Updating password triggers the pre-save hook in User model to re-hash it
            adminUser.password = '123456';
            await adminUser.save();
            console.log('Admin password updated to: 123456');
        } else {
            console.log('Admin user not found. Creating...');
            await User.create({
                name: 'Admin',
                email: adminEmail,
                password: '123456',
                role: 'admin',
            });
            console.log('Admin user created with password: 123456');
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();
