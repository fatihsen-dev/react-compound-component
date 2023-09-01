"use client";
import { Tab } from "@/components/Tab";

export default function page() {
   return (
      <div className='h-full grid place-items-center'>
         <div className='max-w-3xl w-full'>
            <h1 className='text-4xl font-semibold text-center mb-10'>
               React Compound Component
            </h1>
            <Tab>
               <Tab.List>
                  <Tab.Item>Overview</Tab.Item>
                  <Tab.Item>Analytics</Tab.Item>
                  <Tab.Item>Reports</Tab.Item>
                  <Tab.Item>Notifications</Tab.Item>
               </Tab.List>
               <Tab.Panels>
                  <Tab.Panel>
                     <h1 className='!text-3xl !font-semibold'>Overview</h1>
                     <p className='!text-xl font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur nam error provident dolore repellendus iusto
                        temporibus est atque tenetur quasi!
                     </p>
                  </Tab.Panel>
                  <Tab.Panel>
                     <h1 className='!text-3xl !font-semibold'>Analytics</h1>
                     <p className='!text-xl font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                        minus at dicta quibusdam placeat aut, hic mollitia assumenda a
                        aspernatur qui et reiciendis numquam, eum, sed ut dolore soluta
                        nulla.
                     </p>
                  </Tab.Panel>
                  <Tab.Panel>
                     <h1 className='!text-3xl !font-semibold'>Reports</h1>
                     <p className='!text-xl font-light'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                        quaerat numquam consectetur quam ducimus nulla harum! Consequatur
                        error ratione, at quisquam exercitationem numquam! Voluptate
                        itaque velit quis ipsum pariatur dolore consectetur quibusdam
                        quod, culpa libero amet, nihil maiores unde molestias!
                     </p>
                  </Tab.Panel>
                  <Tab.Panel>
                     <h1 className='!text-3xl !font-semibold'>Notifications</h1>
                     <p className='!text-xl font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit, deleniti?
                     </p>
                  </Tab.Panel>
               </Tab.Panels>
            </Tab>
         </div>
      </div>
   );
}
