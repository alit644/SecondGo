import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import LogoutButton from '@/components/LogoutButton';

const Page = () => {
 return (
  <div className="grid grid-cols-1  gap-6">
  {/* Security Settings */}
  <Card className="hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Lock className="w-5 h-5 text-red-600" />
        Security Settings
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex justify-between items-center p-3 border rounded-lg">
        <div>
          <p className="font-semibold">Change Password</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Update your account password
          </p>
        </div>
        <Button variant="outline" size="sm">
          Change
        </Button>
      </div>
      <div className="flex justify-between items-center p-3 border rounded-lg">
        <div>
          <p className="font-semibold">Delete Account</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
           Delete your account
          </p>
        </div>
        <Button variant="outline" size="sm" className='border  border-red-500 dark:border-red-600 text-red-500 dark:text-red-600 hover:bg-red-100 hover:text-red-500'>
          Delete
        </Button>
      </div>

      <div className="flex justify-between items-center p-3 ">
        <div>
          <LogoutButton />
        </div>
      </div>
    </CardContent>
  </Card>
</div>
 );
}

export default Page;
