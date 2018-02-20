$('.write-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true
        },
        email:{
            required: true,
            email: true
        }
    },

    messages: {
        name: {
            required: 'Имя обязательно должно быть заполнено',
            minlength: jQuery.validator.format('Длина имени должна быть не менее {0}-х символов')
        },
        phone: {
            required: 'Телефон обязательно должнен быть заполнен'
        },
        email: {
            required: 'Поле email обязательно для заполнения',
            email: 'Неправильный формат ввода данных'
        }
    }
});