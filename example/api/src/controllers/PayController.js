'use strict';

const PayRepository = require('../repositories/PayRepository');


exports.get = (req, res) => {
    PayRepository.getAll()
                .then((empresas) => {
                    res.status(200).send(empresas);
                }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res) => {
    const _id = req.params.id;

    PayRepository.getById(_id)
        .then((empresa) => {
            res.status(200).send(empresa);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res) => {
    const vm = req.body;
    PayRepository.create(vm)
        .then((empresa) => {
            res.status(200).send(empresa);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res) => {
    const _id = req.params.id;
    const vm = req.body;

    PayRepository.update(_id, vm)
        .then((empresa) => {
            res.status(201).send(empresa);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res) => {
    PayRepository.delete(req.params.id)
        .then(() => {
            res.status(200).send('registro deletado com sucesso!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};
