print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.divide")
print("Enter 0 to end")
y = input(print("select a number from above operations :"))
x = int(y)
if(1 <= x <= 2):
    if(x == 1):
        a = input(print("Enter first number :"))
        b = input(print("Enter second number :"))
        print("Adding your numbers is : " + str(int(a)+int(b)))

    elif(x == 2):
        a = input(print("Enter first number :"))
        b = input(print("Enter second number :"))
        print("Subtracting your numbers is : " + str(int(a)-int(b)))
    else:
        print("Enter above operation numbers only")
elif(x > 2):
    if(x == 3):
        a = input(print("Enter first number :"))
        b = input(print("Enter second number :"))
        print("Multiplying your numbers is : " + str(int(a)*int(b)))
    elif(x == 4):
        a = input(print("Enter first number :"))
        b = input(print("Enter second number :"))
        print("Dividing your numbers is : " + str(int(a)/int(b)))
    else:
        print("Enter above operation numbers only")
elif(x == 0):
    exit()
else:
    print("Enter above operation numbers only")