(function(r,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(r=typeof globalThis<"u"?globalThis:r||self,o(r["convert-it"]={}))})(this,function(r){"use strict";const i={length:{millimeters:1,centimeters:.1,meters:.001,kilometers:1e-6,inches:.0393701,feet:.00328084,yards:.00109361,miles:621371e-12,nautical_miles:539957e-12,light_years:1057e-19,astronomical_units:66846e-16},weight:{milligrams:1,grams:.001,kilograms:1e-6,metric_tons:1e-9,pounds:220462e-11,ounces:35274e-9,stones:157473e-12,carats:.005,atomic_mass_units:6022e20},volume:{milliliters:1,liters:.001,cubic_meters:1e-6,cups:.00422675,pints:.00211338,quarts:.00105669,gallons:264172e-9,imperial_gallons:219969e-9,teaspoons:.202884,tablespoons:.067628,barrels:628981e-11},area:{square_millimeters:1,square_centimeters:.01,square_meters:1e-6,hectares:1e-8,square_kilometers:1e-12,square_inches:.0015500031,square_feet:107639e-10,square_yards:119599e-11,square_miles:3861e-16,acres:2471e-13},speed:{meters_per_second:1,kilometers_per_hour:3.6,miles_per_hour:2.23694,knots:1.94384,mach:.00293858},pressure:{pascals:1,bar:1e-5,atmospheres:986923e-11,psi:145038e-9,torr:.00750062},energy:{joules:1,calories:.239006,kilocalories:239006e-9,watt_hours:277778e-9,kilowatt_hours:277778e-12,btu:947817e-9,electronvolts:6242e15},power:{watts:1,kilowatts:.001,horsepower:.00134102},data_storage:{bits:1,bytes:.125,kilobytes:125e-6,megabytes:125e-9,gigabytes:125e-12,terabytes:125e-15,petabytes:125e-18},fuel_efficiency:{liters_per_100_kilometers:1,miles_per_gallon:235.215},frequency:{hertz:1,kilohertz:.001,megahertz:1e-6,gigahertz:1e-9},angle:{degrees:1,radians:.0174533,gradians:1.11111},water_hardness:{parts_per_million:1,german_hardness:.0562,french_hardness:.1,english_hardness:.0699,millival:.02,millimole:.01},temperature:{Celsius:1,Fahrenheit:1,Kelvin:1}},c=Object.keys(i),l=Object.values(i).map(e=>Object.keys(e));function u(e,t){for(const s of Object.keys(i)){const n=Object.keys(i[s]);if(n.includes(e)&&n.includes(t))return s}return null}function m(e,t,s){const n=u(t,s);if(!n)throw new Error(`Incompatible units: ${t} and ${s}`);if(n==="temperature")return p(e,t,s);const a=i[n];return e*a[s]/a[t]}function _(e,t){return{to:m.bind(null,e,t)}}function h(e){return{from:_.bind(null,e)}}function p(e,t,s){if(t===s)return e;switch(t){case"Celsius":return s==="Fahrenheit"?e*9/5+32:e+273.15;case"Fahrenheit":return s==="Celsius"?(e-32)*5/9:(e-32)*5/9+273.15;case"Kelvin":return s==="Celsius"?e-273.15:(e-273.15)*9/5+32;default:throw new Error(`Unsupported temperature conversion: ${t} to ${s}`)}}r.categories=c,r.convert=h,r.units=l,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
