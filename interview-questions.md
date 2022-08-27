# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming looks at everything as an object where functional programming uses syntax functions to create objects and classes. 

Researched answer: Object-oriented programming was created to work with complex software systems.OOP looks at everything as an object. Ruby is an example of OOP. OOP's data is mutable and is not suited for Parallel Programming. The flow of OOP is controlled using loops and conditonal statements. Functional programming is different becuase it utilizes immutable data that follows the declartive programming model where OOP follows the imperative programming model.  

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Float is a number decimal like 2.7 and interger is a whole number like 3. Float has to be passed into an equation if you don't want only a whole number to return.

Researched answer: Intergers are whole numbers and floats are non-whole numbers. You would use a float if you wanted to reutrn a non-whole number or a number with a remainder. An example of float is;

9.0 / 8
This would return 1.125

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return is when no return is specified it returns the value of the last line is automatically. An example is;

def name
    'Hello Namier'
end
    p name would return 'Hello Namier'
    puts name would return Hello Namier

Researched answer: An implicit reutrn is a returned value without using the keyword return in your syntax. This is commonly utilized in Ruby. An example of implicit return in Ruby syntax is;

def name
    'Hello Charlean and Austin!'
end
    p name would return 'Hello Charlean and Austin!'
    puts name would return Hello Charlean and Austin!

4. What is a block in Ruby?

Your answer: A block in ruby is code that doesn't require a name. It is an anonymous function and it is stored between do/end. 

Researched answer: Ruby block syntax is an annonymous function that utlizes the  do/end statement. These blocks determine the outcome of the method that is is passed to. An example of Ruby block using the times method is;

my_num = 3

my_num.times do
    puts 'Echo 2022'
end

This would print;

Echo 2022
Echo 2022
Echo 2022

5. What is an instance variable in Ruby?

Your answer: An instance variable in ruby starts with @ and belongs to the instance of the class. It is accessed in the local scope. 

Researched answer: Instance variables are locally scoped and can be accessed using using the accessor methods set and get in the class its scoped in. In order for an instance varaible to be accessable, it must contain the @ symbol in front of it. Instance variables cannot be accessed from outside of an object. Instance variables will not have a value before they are initialized. Instance variables do not require a declaration for flexability in structing objects. An example of a class with an instance variable is;

class Superhero
    def set_name(name)
         @name = name
    end

    def get_name
        @name
    end
 end

 p superhero_one = Superhero.new (This is the new instance)
 superhero_one.set_name('Batman') (This is setting the superhero name)
 p superhero_one.get_name (This is getting the new instance)
 would output 'Batman'

## Looking Ahead: Terms for Next Week

1. PostgreSQL: is an object-relational databse management system. It is open source and has over 30 years of active development. It is known for its reliability. 

2. Ruby on Rails: is a server-side web application framework that is written in Ruby. It was created by David Heinemeier Hansson (DHH) in July 2004. It is open source. 

3. ORM: Object-relational mapping is a programming technique for converting data between incompatible systems using object-oriented programming languages. It's the tool that lets develipers write SQL queries using ruby on rails. 

4. Active Record: is a orm that takes data that is stored in a datbse table and lets you interact with the data like a Ruby object. 

5. Migrations: are a tool that allows you to change that shape of your database over time. They are files that run SQL commands.
