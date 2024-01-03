function printUserInfo() {
    console.log(`${this.firstName} ${this.lastName}`);
}

const users = [
    { firstName: 'Иван', lastName: 'Иванов' },
    { firstName: 'Петр', lastName: 'Петров' },
    { firstName: 'Анна', lastName: 'Сидорова' },
    { firstName: 'Елена', lastName: 'Козлова' },
    { firstName: 'Дмитрий', lastName: 'Смирнов' }
];

users.forEach(function(user) {
    printUserInfo.call(user);
});
