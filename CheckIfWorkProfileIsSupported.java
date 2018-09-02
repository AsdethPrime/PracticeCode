// This program checks if the device supports creating Work Profile
// First Edit: To make the program more efficient, I am turning this into a function rather than a class. 

import android.content.pm.PackageManager ;

	// This is just a skeleton function and NOT a complete file
	// The function checks if Work Profile is supported on the device
	// The function returns TRUE if it is supported
	// The function returns FALSE if it is not supported.

	public static Boolean main ( String args[] )
	{
		return pm.hasSystemFeature(PackageManager.FEATURE_MANAGED_USERS);
		
	}
}		
