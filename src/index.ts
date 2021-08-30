import * as express from "express";
import * as mongoose from 'mongoose';
import * as config from 'config';
import * as cors from 'cors';
import { userSchema } from './models/user.model';
const plans: { [key: string]: any } = require('./config/plans.json');

const User = mongoose.model('user', userSchema);

const app = express.default();

const PORT = process.env.PORT || 6563;
app.set('port', PORT);





import { connectDB } from './config/db';
connectDB();

app.use(express.default.json())

app.use(cors.default());



app.get('/api/getPlans', (req, res) => {

    try {
        res.status(200).send(plans);
        console.log(plans);
    }
    catch (error) {
        res.status(404).json('Server Error');
    }
})


app.post('/api/postDetailspage', async (req, res) => {

    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dob: req.body.dob,
        nationalId: req.body.nationalId,
        email: req.body.email,
        fileUploaded: req.body.file,
        contact: req.body.contact,
        regAddress: req.body.regAddress,
        taxOption: req.body.taxOption,
        plan: req.body.plan
    })

    await user.save((err, savedUser) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).send(savedUser);
            console.log(savedUser);
        }
    });

})





















// app.listen(process.env.PORT || 6563);

const server = app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})

server.timeout = 300000;