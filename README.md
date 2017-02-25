ag-Grid-rx Angular (2+) Component
==============

This project contains the Angular Component for use with ag-Grid-rx

#### Install with Npm
```sh
$ npm install ag-grid-rx-ng
```

To use with an observable data source:

1. Set rowModelType='observable'
2. Set rowDataSource to your observable - your observable must emit an array of data.
3. Set rowDataSourceKeyProperty to a 'primary key' attribute from your data - every object
   in the array emitted by your observable must have this property, and it must be unique.
4. Done!

See [www.ag-grid.com](http://www.ag-grid.com) for an overview and full documentation, **and
[ag-grid-rx](https://github.com/mrsheepuk/ag-grid-rx) for important differences from ag-Grid 
when using an Observable data source**.

[Some examples can be seen here](https://github.com/ceolter/ag-grid-ng2-example) for the 
main ag-grid-ng2 component - these may or may not work when using an Observable data source
(in particular, **pagination and row grouping/child rows will not work**, and probably 
others too).

#### To Build
- `npm install gulp -g`
- `npm install npm-install-peers -g`
- `npm install`
- `npm-install-peers`
- `npm run clean-build`
