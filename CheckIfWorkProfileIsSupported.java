// This program checks if the device supports creating Work Profile

import android.content.pm.PackageManager ;

public class CheckIfWorkProfileIsSupported
{
	// Class consists of 1 function that return 1 value
	// Value returned is TRUE if creating Work Profile is possible
	// Value returned is FALSE if not possible

	public static Boolean main ( String args[] )
	{
		Boolean isSupported ;
		PackageManager pm = getPackageManager();
		isSupported = pm.hasSystemFeature(PackageManager.FEATURE_MANAGED_USERS);
		return isSupported ;
	}
}		
