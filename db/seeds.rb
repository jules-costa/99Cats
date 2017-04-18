# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Cat.create!(birth_date: Date.new(2001, 2, 3), color: "brown", name: "Clyde", sex: "M", description: "Likes to nap")
cat2 = Cat.create!(birth_date: Date.new(2002, 2, 3), color: "orange", name: "Bonnie", sex: "F", description: "Likes to nap")
cat3 = Cat.create!(birth_date: Date.new(2004, 2, 3), color: "grey", name: "Whiskers", sex: "M", description: "Enjoys sun-bathing")
cat4 = Cat.create!(birth_date: Date.new(2006, 2, 3), color: "white", name: "Star", sex: "F", description: "Loves salmon")
