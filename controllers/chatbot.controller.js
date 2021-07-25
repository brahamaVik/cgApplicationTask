const botSchema = require('../models/chatbot.model');
const mongoose = require('mongoose');

const botControllers = {
    getAll: function(req, res) {
        try {
            botSchema.find()
                .then(rs => {
                    res.status(200).json({
                        result: rs
                    });
                }).catch(error => {
                    res.status(204).json({
                        result: 'No data.',
                        errorMessage: error
                    });
                })
        } catch(error) {
            console.log(error);
        }
    },
    getOne: function(req, res) {
        try {
            botSchema.find({id: req.params.id})
                .then(rs =>{
                    res.status(200).json({
                        result: rs
                    });
                }).catch(error => {
                    res.status(204).json({
                        result: 'No data.',
                        errorMessage: error
                    });
                })
        } catch(error) {
            console.log(error);
        }        
    },
    addData: function(req, res) {
        try {
            const botAdd = new botSchema({
                _id: new mongoose.Types.ObjectId(),
                 id: req.body.id,
                 owner: req.body.owner,
                 name: req.body.name,
                 status: req.body.status
            });
            botAdd.save()
            .then(result =>{
                res.status(200).json({
                    message: 'Record inserted.'
                })
            }).catch(error => {
                res.status(404).json({
                    message: 'Record not inserted and error '+error
                });
            });            
        } catch(error) {
            console.log(error);
        }        
    },
    editData: function(req, res) {
        try {
            botSchema.find({id: req.params.id})
                .then(rs => {
                    botSchema.updateOne({_id: rs[0]._id}, {
                        $set: {
                            owner: (req.body.newOwner)?req.body.newOwner:rs[0].owner,
                            name: (req.body.newName)?req.body.newName:rs[0].name,
                            status: (req.body.newStatus)?req.body.newStatus:rs[0].status
                        }
                    })
                    .then(rsUpdate => {
                        res.status(200).json({
                            message: 'Data has been updated.'
                        })
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json({
                            message: 'Internal error'
                        })
                    })
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message: 'Internal server error.'
                    })
                });
        } catch(error) {
            console.log(error);
        }        
    },
    deleteData: function(req, res) {
        try {
            botSchema.remove({id: req.params.id})
                .then(rs => {
                    res.status(200).json({
                        message: 'Data has been deleted.'
                    });
                }).catch(error => {
                    res.status(500).json({
                        message: error
                    })
                })
        } catch(error) {
            console.log(error);
        }        
    },
}

module.exports = botControllers;
