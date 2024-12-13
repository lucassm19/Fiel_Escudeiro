const Sheet = require('../models/Sheet');
module.exports = {
    async findAll(req, res) {
        try {
            const sheets = await Sheet.findAll();
            return res.json(sheets);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async show(req, res) {
        try {
            const sheet = await Sheet.findByPk(req.params.id);
            return res.json(sheet);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res) {
        try {
            const sheet = await Sheet.create(req.body);
            return res.json(sheet);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const sheet = await Sheet.findByPk(req.params.id);
            await sheet.update(req.body);
            return res.json({ sheet });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async destroy(req, res) {
        try {
            const sheet = await Sheet.findByPk(req.params.id);
            await sheet.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
