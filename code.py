#Challenge 1:
# Check if num is even or odd
num = input(" Select a number ")
# Making the value an int only
num=int(num)
#Checking if num is even
if num % 2 == 0:
    print ("num is even")
if num % 2 != 0: #could use else
    print ("num is odd")
#Checking age elegibilty
age = int(input(" How old are you?"))
if age >= 18:
    print ("Congrats your eligble to vote!")
else:
    print ("Your not eligble to vote")
# Checking type number
value= int(input(" Pick a number"))
if value > 0:
    print ("Your a  postive number")
elif value < 0 and value != 0:
    print ("Your a negative number!")
else:
    print ("Your number is likley equal to zero")


#Challenge 2
#setting count =0
#count = 0 # add i instead of using count
for i in range (1,11):
    print (i)
# creating a while loop in python
number=0
while number < 5:
    number = number+1
    print(number)
#####################
#factorial=0
#for i range(1, factorial+1):
number=4
factorial=number
while number !=1:
    number -= 1
    factorial *= number
print(factorial)


#################
##################
# Challenge 3:
#Create a function that greets the user
def greeting (name):
    print("Hello "+ name + " How are you?" )
greeting(input("Whats your name?")) ## Dont call function reate a scope error
#Write a function that checks even or odd!
def even_odd (num):
    if num % 2 == 0:
        print ("num is even")
    else:
        print ("num is odd")
even_odd(int(input("Choose a # "))) # Error forget to change to interger
#Write function to check vowels
def vowels (string):
    v=["a","i","e","o","u"]
    counter=0
    for let in string:
        for i in v: #CORRECT WAY
            if let == i:
                counter=counter +1
    print (counter)


        #print(let)
    #for i in range(len(v)): # Possible error to use
        #for let in string:
            #print(let)
vowels(str(input("Enter a word with vowels!(lowercase ONLY!)")))
    #for let in range(len(string)):
        #if let ==
#############################################
#############################################
# Challenge 4:
# Write a program stores list of fruits and prints them
lst_fruits2=[]
fruit = 0
n = int(input("choose a # of item in the list"))
while fruit < n:
    lst_fruits2.append(input("Choose a fruit"))
    print(lst_fruits2[fruit]) # Possible error not have lst_fruit2/ CORRECT WAY
    fruit+=1
print(lst_fruits2)
#lst_fruits= ["apple","oranges","bannas"]
#lst_fruits.append(input("Choose a fruit"))
#print(lst_fruits)
#print (lst_fruits.append(input("Choose a fruit"))) # POSSIBLE ERROR

# Write a program that stores students names and grade
#dict={}
def student_name (name,grade):
    my_dict={'names': "Jessica", 'grades': "A+"}
    my_dict['names']=name
    my_dict["grades"]=grade
    print(my_dict)
student_name(str(input("enter a name!")), input("enter a letter grade ONLY"))
#returns index of max in a list
#a_ray=[1,2,3,4]
def highest_value (value):
    max_val = value[0]
    for val in value:
        if max_val < val:
            max_val = val 
    return max_val #change to print maybe
highest_value([-1,-2,-3,-4])   