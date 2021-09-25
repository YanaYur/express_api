const { Schema, model } = require('mongoose');

const schema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    capacity: { type: Number, required: true },
    image_url: { type: String, required: true },
    short_desc: { type: String, required: false },
    type: { type: String, required: true, enum: ['van', 'micro', 'super', 'sedan', '4x4'] },
    reservations: [{
        from: { type: Date, required: true },
        to: { type: Date, required: true },
    }]
});

module.exports = model('Car', schema);