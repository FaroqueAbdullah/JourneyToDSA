# check if the string is palindrome or not
def isPalindrome(string, low, high):

  return low >= high or ( string[low] == string[high] and isPalindrome(string, low + 1, high - 1) )


# rotate image sequecely
def isRotatePalindrome(string):
  n = len(string)

  for i in range(n):
    string = string[1:] + string[0]

    if isPalindrome(string, 0, n - 1):
      return True

  return False


if __name__ == '__main__':

  string = "CBAABCD".replace(" ", "")
  
  print(isRotatePalindrome(string))