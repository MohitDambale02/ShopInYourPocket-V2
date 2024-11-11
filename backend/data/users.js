import bcrypt from 'bcryptjs';

const users = [
{
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
},
{
    name: 'Mohit Dambale',
    email: 'mohitdambale@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
},
{
    name: 'Narendra Modi',
    email: 'Narendra Modi@email.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
}
]


export default users;