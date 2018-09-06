public void askForPermission()
{
  Activity activity = getParentActivity();
  
  if (activity == null)
    {
    return;
    }
   
   ArrayList <Strings> permissions = new ArrayList<>();
   
   if (activity.checkSelfPermission(Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED)
    {
    permission.add(Manifest.permission.READ_CONTACT);
    permission.add(Manifest.permission.WRITE_CONTACT);
    permission.add(Manifest.permission.GET_ACCOUNT);
    }
    
   String [] item = permissions.toArray (new String [permission.size()] );
   activity.requestPermissions(items,1);
  }
  
