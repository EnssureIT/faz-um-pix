'use strict';

exports.get = (req, res) => {
    res.status(200).send("Metodo Get");
};

exports.getById = (req, res) => {
    res.status(200).send("Metodo GetById");
};

exports.post = (req, res) => {
    res.status(200).send("Metodo Post");
};

exports.put = (req, res) => {
    res.status(201).send("Metodo Put");
};

exports.delete = (req, res) => {
    res.status(200).send('Metodo Delete');
};