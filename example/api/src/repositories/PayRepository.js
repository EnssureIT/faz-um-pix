'use strict';
var db = require('../config/db');


module.exports = new class PayRepository {

    getAll() {
        return db.Pay.find();
    }

    getById(id) {
        return db.Pay.findById(id);
    }

    create(escola) {
        return db.Pay.create(escola);
    }

    update(id, empresa) {

        const updateempresa = {
            telefone: empresa.telefone
           
        }

        return db.Pay.findByIdAndUpdate(id, updateempresa);
    }

    delete(id) {
        return db.Pay.findByIdAndRemove(id);
    }
}

