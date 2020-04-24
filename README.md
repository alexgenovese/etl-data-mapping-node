<div align="center">

# A simple data transformation from Magento 1.9.x, Magento 2, Shopify and Stripe

This project was built only for fast testing before the ingestion stage of these different source.

</div>

In ```schemas``` folder you can see the output json format I would like to output from my apis (node-json-transform format). 

```Data``` folder is divided into some subfolders in order to divide the different sources.

```transform.js``` it's a fake ETL to manipulate the data before use node-json-transform 

```helpers.js``` it's the file where the magic happens. 

I'll evolve this repo into a module to dynamic transform and sanitize data for small projects
