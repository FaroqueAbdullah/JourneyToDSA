def isPalindrome(string, low, high):

  return low >= high or ( string[low] == string[high] and isPalindrome(string, low + 1, high - 1) )


if __name__ == '__main__':

  string = "ABCDDCBA".replace(" ", "")
  low = 0
  high = len(string) - 1
  
  print(isPalindrome(string, low, high))