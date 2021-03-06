"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/Canberra"] = {

	"guess:by:offset" : helpers.makeTestGuess("Australia/Canberra", { offset: true, expect: "Australia/Sydney" }),

	"guess:by:abbr" : helpers.makeTestGuess("Australia/Canberra", { abbr: true, expect: "Australia/Sydney" }),

	"1916" : helpers.makeTestYear("Australia/Canberra", [
		["1916-12-31T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1916-12-31T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1917" : helpers.makeTestYear("Australia/Canberra", [
		["1917-03-24T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1917-03-24T16:00:00+00:00", "02:00:00", "AEST", -600]
	]),

	"1941" : helpers.makeTestYear("Australia/Canberra", [
		["1941-12-31T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1941-12-31T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1942" : helpers.makeTestYear("Australia/Canberra", [
		["1942-03-28T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1942-03-28T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1942-09-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1942-09-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1943" : helpers.makeTestYear("Australia/Canberra", [
		["1943-03-27T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1943-03-27T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1943-10-02T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1943-10-02T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1944" : helpers.makeTestYear("Australia/Canberra", [
		["1944-03-25T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1944-03-25T16:00:00+00:00", "02:00:00", "AEST", -600]
	]),

	"1971" : helpers.makeTestYear("Australia/Canberra", [
		["1971-10-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1971-10-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1972" : helpers.makeTestYear("Australia/Canberra", [
		["1972-02-26T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1972-02-26T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1972-10-28T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1972-10-28T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1973" : helpers.makeTestYear("Australia/Canberra", [
		["1973-03-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1973-03-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1973-10-27T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1973-10-27T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1974" : helpers.makeTestYear("Australia/Canberra", [
		["1974-03-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1974-03-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1974-10-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1974-10-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1975" : helpers.makeTestYear("Australia/Canberra", [
		["1975-03-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1975-03-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1975-10-25T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1975-10-25T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1976" : helpers.makeTestYear("Australia/Canberra", [
		["1976-03-06T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1976-03-06T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1976-10-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1976-10-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1977" : helpers.makeTestYear("Australia/Canberra", [
		["1977-03-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1977-03-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1977-10-29T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1977-10-29T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1978" : helpers.makeTestYear("Australia/Canberra", [
		["1978-03-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1978-03-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1978-10-28T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1978-10-28T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1979" : helpers.makeTestYear("Australia/Canberra", [
		["1979-03-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1979-03-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1979-10-27T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1979-10-27T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1980" : helpers.makeTestYear("Australia/Canberra", [
		["1980-03-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1980-03-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1980-10-25T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1980-10-25T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1981" : helpers.makeTestYear("Australia/Canberra", [
		["1981-02-28T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1981-02-28T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1981-10-24T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1981-10-24T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1982" : helpers.makeTestYear("Australia/Canberra", [
		["1982-04-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1982-04-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1982-10-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1982-10-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1983" : helpers.makeTestYear("Australia/Canberra", [
		["1983-03-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1983-03-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1983-10-29T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1983-10-29T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1984" : helpers.makeTestYear("Australia/Canberra", [
		["1984-03-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1984-03-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1984-10-27T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1984-10-27T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1985" : helpers.makeTestYear("Australia/Canberra", [
		["1985-03-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1985-03-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1985-10-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1985-10-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1986" : helpers.makeTestYear("Australia/Canberra", [
		["1986-03-15T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1986-03-15T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1986-10-18T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1986-10-18T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1987" : helpers.makeTestYear("Australia/Canberra", [
		["1987-03-14T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1987-03-14T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1987-10-24T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1987-10-24T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1988" : helpers.makeTestYear("Australia/Canberra", [
		["1988-03-19T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1988-03-19T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1988-10-29T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1988-10-29T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1989" : helpers.makeTestYear("Australia/Canberra", [
		["1989-03-18T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1989-03-18T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1989-10-28T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1989-10-28T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1990" : helpers.makeTestYear("Australia/Canberra", [
		["1990-03-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1990-03-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1990-10-27T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1990-10-27T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1991" : helpers.makeTestYear("Australia/Canberra", [
		["1991-03-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1991-03-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1991-10-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1991-10-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1992" : helpers.makeTestYear("Australia/Canberra", [
		["1992-02-29T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1992-02-29T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1992-10-24T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1992-10-24T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1993" : helpers.makeTestYear("Australia/Canberra", [
		["1993-03-06T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1993-03-06T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1993-10-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1993-10-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1994" : helpers.makeTestYear("Australia/Canberra", [
		["1994-03-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1994-03-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1994-10-29T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1994-10-29T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1995" : helpers.makeTestYear("Australia/Canberra", [
		["1995-03-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1995-03-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1995-10-28T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1995-10-28T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1996" : helpers.makeTestYear("Australia/Canberra", [
		["1996-03-30T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1996-03-30T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1996-10-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1996-10-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1997" : helpers.makeTestYear("Australia/Canberra", [
		["1997-03-29T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1997-03-29T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1997-10-25T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1997-10-25T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1998" : helpers.makeTestYear("Australia/Canberra", [
		["1998-03-28T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1998-03-28T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1998-10-24T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1998-10-24T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"1999" : helpers.makeTestYear("Australia/Canberra", [
		["1999-03-27T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["1999-03-27T16:00:00+00:00", "02:00:00", "AEST", -600],
		["1999-10-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["1999-10-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2000" : helpers.makeTestYear("Australia/Canberra", [
		["2000-03-25T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2000-03-25T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2000-08-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2000-08-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2001" : helpers.makeTestYear("Australia/Canberra", [
		["2001-03-24T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2001-03-24T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2001-10-27T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2001-10-27T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2002" : helpers.makeTestYear("Australia/Canberra", [
		["2002-03-30T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2002-03-30T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2002-10-26T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2002-10-26T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2003" : helpers.makeTestYear("Australia/Canberra", [
		["2003-03-29T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2003-03-29T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2003-10-25T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2003-10-25T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2004" : helpers.makeTestYear("Australia/Canberra", [
		["2004-03-27T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2004-03-27T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2004-10-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2004-10-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2005" : helpers.makeTestYear("Australia/Canberra", [
		["2005-03-26T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2005-03-26T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2005-10-29T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2005-10-29T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2006" : helpers.makeTestYear("Australia/Canberra", [
		["2006-04-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2006-04-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2006-10-28T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2006-10-28T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2007" : helpers.makeTestYear("Australia/Canberra", [
		["2007-03-24T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2007-03-24T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2007-10-27T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2007-10-27T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2008" : helpers.makeTestYear("Australia/Canberra", [
		["2008-04-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2008-04-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2008-10-04T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2008-10-04T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2009" : helpers.makeTestYear("Australia/Canberra", [
		["2009-04-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2009-04-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2009-10-03T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2009-10-03T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2010" : helpers.makeTestYear("Australia/Canberra", [
		["2010-04-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2010-04-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2010-10-02T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2010-10-02T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2011" : helpers.makeTestYear("Australia/Canberra", [
		["2011-04-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2011-04-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2011-10-01T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2011-10-01T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2012" : helpers.makeTestYear("Australia/Canberra", [
		["2012-03-31T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2012-03-31T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2012-10-06T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2012-10-06T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2013" : helpers.makeTestYear("Australia/Canberra", [
		["2013-04-06T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2013-04-06T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2013-10-05T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2013-10-05T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2014" : helpers.makeTestYear("Australia/Canberra", [
		["2014-04-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2014-04-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2014-10-04T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2014-10-04T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2015" : helpers.makeTestYear("Australia/Canberra", [
		["2015-04-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2015-04-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2015-10-03T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2015-10-03T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2016" : helpers.makeTestYear("Australia/Canberra", [
		["2016-04-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2016-04-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2016-10-01T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2016-10-01T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2017" : helpers.makeTestYear("Australia/Canberra", [
		["2017-04-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2017-04-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2017-09-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2017-09-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2018" : helpers.makeTestYear("Australia/Canberra", [
		["2018-03-31T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2018-03-31T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2018-10-06T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2018-10-06T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2019" : helpers.makeTestYear("Australia/Canberra", [
		["2019-04-06T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2019-04-06T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2019-10-05T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2019-10-05T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2020" : helpers.makeTestYear("Australia/Canberra", [
		["2020-04-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2020-04-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2020-10-03T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2020-10-03T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2021" : helpers.makeTestYear("Australia/Canberra", [
		["2021-04-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2021-04-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2021-10-02T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2021-10-02T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2022" : helpers.makeTestYear("Australia/Canberra", [
		["2022-04-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2022-04-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2022-10-01T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2022-10-01T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2023" : helpers.makeTestYear("Australia/Canberra", [
		["2023-04-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2023-04-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2023-09-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2023-09-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2024" : helpers.makeTestYear("Australia/Canberra", [
		["2024-04-06T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2024-04-06T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2024-10-05T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2024-10-05T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2025" : helpers.makeTestYear("Australia/Canberra", [
		["2025-04-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2025-04-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2025-10-04T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2025-10-04T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2026" : helpers.makeTestYear("Australia/Canberra", [
		["2026-04-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2026-04-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2026-10-03T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2026-10-03T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2027" : helpers.makeTestYear("Australia/Canberra", [
		["2027-04-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2027-04-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2027-10-02T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2027-10-02T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2028" : helpers.makeTestYear("Australia/Canberra", [
		["2028-04-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2028-04-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2028-09-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2028-09-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2029" : helpers.makeTestYear("Australia/Canberra", [
		["2029-03-31T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2029-03-31T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2029-10-06T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2029-10-06T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2030" : helpers.makeTestYear("Australia/Canberra", [
		["2030-04-06T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2030-04-06T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2030-10-05T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2030-10-05T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2031" : helpers.makeTestYear("Australia/Canberra", [
		["2031-04-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2031-04-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2031-10-04T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2031-10-04T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2032" : helpers.makeTestYear("Australia/Canberra", [
		["2032-04-03T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2032-04-03T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2032-10-02T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2032-10-02T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2033" : helpers.makeTestYear("Australia/Canberra", [
		["2033-04-02T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2033-04-02T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2033-10-01T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2033-10-01T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2034" : helpers.makeTestYear("Australia/Canberra", [
		["2034-04-01T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2034-04-01T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2034-09-30T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2034-09-30T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2035" : helpers.makeTestYear("Australia/Canberra", [
		["2035-03-31T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2035-03-31T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2035-10-06T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2035-10-06T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2036" : helpers.makeTestYear("Australia/Canberra", [
		["2036-04-05T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2036-04-05T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2036-10-04T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2036-10-04T16:00:00+00:00", "03:00:00", "AEDT", -660]
	]),

	"2037" : helpers.makeTestYear("Australia/Canberra", [
		["2037-04-04T15:59:59+00:00", "02:59:59", "AEDT", -660],
		["2037-04-04T16:00:00+00:00", "02:00:00", "AEST", -600],
		["2037-10-03T15:59:59+00:00", "01:59:59", "AEST", -600],
		["2037-10-03T16:00:00+00:00", "03:00:00", "AEDT", -660]
	])
};