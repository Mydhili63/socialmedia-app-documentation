def binarysearch(list1, key):
     low = 0
     high = len(list1)-1
     mid = 0
     Found = False  
     while low<=high and not Found :
        mid=(low + high) // 2   
        if key == list1[mid]:
            Found = True
        elif key > list1[mid]:
            low = mid+1
        else:
            high = mid-1
     if Found == True:
        print("key is found")
     else:
        print("key is not found")

list1 =[]
n=int(input("Enter number of elements in the List :"))
if(n==0):
    print("Enter valid number")
    exit()
print("Enter the list of elements:")
for i in range(0,n):
    m=int(input())
    list1.append(m)
list1.sort()
print(list1)
key = int(input("enter the key :"))
binarysearch(list1,key)
