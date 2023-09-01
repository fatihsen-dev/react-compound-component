## React Compound Component

```jsx
<Tab>
   <Tab.List>
      <Tab.Item>Overview</Tab.Item>
      <Tab.Item>Analytics</Tab.Item>
      <Tab.Item>Reports</Tab.Item>
      <Tab.Item>Notifications</Tab.Item>
   </Tab.List>
   <Tab.Panels>
      <Tab.Panel>
         <h1 className='text-3xl font-semibold'>Overview</h1>
         <p className='text-xl font-light'>...</p>
      </Tab.Panel>
      <Tab.Panel>
         <h1 className='text-3xl font-semibold'>Analytics</h1>
         <p className='text-xl font-light'>...</p>
      </Tab.Panel>
      <Tab.Panel>
         <h1 className='text-3xl font-semibold'>Reports</h1>
         <p className='text-xl font-light'>...</p>
      </Tab.Panel>
      <Tab.Panel>
         <h1 className='text-3xl font-semibold'>Notifications</h1>
         <p className='text-xl font-light'>...</p>
      </Tab.Panel>
   </Tab.Panels>
</Tab>
```
