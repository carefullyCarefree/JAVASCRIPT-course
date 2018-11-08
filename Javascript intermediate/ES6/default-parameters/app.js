function MillerMember(firstName, yearOfBirth, lastName = 'Miller', nationality = "French") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let mary = new MillerMember('Mary', 1998);
