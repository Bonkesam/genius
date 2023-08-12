import Heading from '@/components/heading';
import { SubscriptionButton } from '@/components/subscription-button';
import { checkSubscripion } from '@/lib/sunscription';
import { Settings } from 'lucide-react';
import React from 'react'

const SettingsPage = async  () => {
    const isPro = await checkSubscripion();

  return (
    <div>
      <Heading 
        title='Settings'
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bg-bgColor='bg-gray-700/10'
      />
      <div className='px-4 lg:px-8 space-y-4'>
        <div className='text-muted-foreground text-sm'>
            {isPro ? "You are currently on a pro Plan." : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}

export default SettingsPage;
