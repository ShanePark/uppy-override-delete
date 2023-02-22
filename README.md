# uppy-override-delete
> Uppy Upload client but can override delete method

### Why
https://uppy.io/ is good enough Javascript file uploader.  
It has `overridePatchMethod` option which transform patch method to post, but doesn't have the same one for delete method.  
Since some of my clients blocked **DELETE** request for security reason and I want uppy to work perfectly on those environments too, I decided to add the option. 

It's all the same as Uppy v3.3.1 but only has overridePatchMethod option.

## What
if you turn on overridePatchMethod option
- it will send **POST** request instead of **DELETE**
- it will add a header `name:"X-HTTP-Method-Override", value:"DELETE"`

## How
```javascript
var uppy = new Uppy()
  .use(Dashboard, {
      inline: true,
      target: '#drag-drop-area',
      showProgressDetails: true,
  })
  .use(Tus, {
      endpoint: 'http://localhost:8080/upload',
      chunkSize: 5000000,
      overridePatchMethod: true, // Override Patch
      overrideDeletehMethod: true, // Override Delete
  })
  ```
  Simply set overrideDeletehMethod value true. that's it
  
## Files
### 📄 uppy.js 
about 900 KB, which is still minified version but prettyfied to see what's happening on code and add required function
### 📄 uppy.min.js 
about 500kb which is much smaller. recommened to use

if you want to implement your own one on newer versions, just check the commit log and add what you need.  
Or Any Pull Reqeust for newer versions are always welcomed. Thanks
