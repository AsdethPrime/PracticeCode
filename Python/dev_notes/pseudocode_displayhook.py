def displayhook(value):
  if value is none :
    return
    
  builtins._ = None
  text = repr(value)
  try:
    sys.stdout.write(text)
  except UnicodeEncodeError:
    bytes = text.encode(sys.stdout.encoding, 'backslashreplace')
    if hasattr(sys.stdout, 'buffer'):
      sys.stdout.buffer.write(bytes)
    else
      bytes = text.encode(sys.stdout.encoding, 'strict')
      sys.stdout.write(text)
      sys.stdout.write("\n")
      builtins._ = value 
