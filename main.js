/* Generated by the Nim Compiler v0.18.0 */
/*   (c) 2018 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI104 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI14009 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI3608 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3711 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI140 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI3706 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI3626 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3640 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3644 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI3644 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3644.node = NNI3644;
var NNI3640 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3640.node = NNI3640;
NTI3706.base = NTI3626;
NTI3711.base = NTI3626;
var NNI3626 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI3706, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI140, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI138, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI138, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI3711, name: "up", sons: null}]};
NTI3626.node = NNI3626;
var NNI3608 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3608.node = NNI3608;
NTI3626.base = NTI3608;
NTI3640.base = NTI3626;
NTI3644.base = NTI3640;
var NNI14009 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI140, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI104, name: "Field1", sons: null}]};
NTI14009.node = NNI14009;

function makeNimstrLit(c_15003) {
		    var ln = c_15003.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_15003.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    

	
}

function setConstr() {
		      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    

	
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_20217, src_20218, ti_20219) {
	var result_20629 = null;

		switch (ti_20219.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(isFatPointer_20201(ti_20219))) {
			result_20629 = src_20218;
			}
			else {
				result_20629 = [src_20218[0], src_20218[1]];
			}
			
			break;
		case 19:
			      if (dest_20217 === null || dest_20217 === undefined) {
        dest_20217 = {};
      }
      else {
        for (var key in dest_20217) { delete dest_20217[key]; }
      }
      for (var key in src_20218) { dest_20217[key] = src_20218[key]; }
      result_20629 = dest_20217;
    
			break;
		case 18:
		case 17:
			if (!((ti_20219.base == null))) {
			result_20629 = nimCopy(dest_20217, src_20218, ti_20219.base);
			}
			else {
			if ((ti_20219.kind == 17)) {
			result_20629 = (dest_20217 === null || dest_20217 === undefined) ? {m_type: ti_20219} : dest_20217;
			}
			else {
				result_20629 = (dest_20217 === null || dest_20217 === undefined) ? {} : dest_20217;
			}
			}
			nimCopyAux(result_20629, src_20218, ti_20219.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_20218 === null) {
        result_20629 = null;
      }
      else {
        if (dest_20217 === null || dest_20217 === undefined) {
          dest_20217 = new Array(src_20218.length);
        }
        else {
          dest_20217.length = src_20218.length;
        }
        result_20629 = dest_20217;
        for (var i = 0; i < src_20218.length; ++i) {
          result_20629[i] = nimCopy(result_20629[i], src_20218[i], ti_20219.base);
        }
      }
    
			break;
		case 28:
			      if (src_20218 !== null) {
        result_20629 = src_20218.slice(0);
      }
    
			break;
		default: 
			result_20629 = src_20218;
			break;
		}

	return result_20629;

}

function eqStrings(a_17603, b_17604) {
		    if (a_17603 == b_17604) return true;
    if ((!a_17603) || (!b_17604)) return false;
    var alen = a_17603.length;
    if (alen != b_17604.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_17603[i] != b_17604[i]) return false;
    return true;
  

	
}

function arrayConstr(len_20664, value_20665, typ_20666) {
		      var result = new Array(len_20664);
      for (var i = 0; i < len_20664; ++i) result[i] = nimCopy(null, value_20665, typ_20666);
      return result;
    

	
}

function cstrToNimstr(c_15203) {
		  var ln = c_15203.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_15203.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_15203.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  result[r] = 0; // terminating zero
  return result;
  

	
}

function toJSStr(s_15403) {
		    var len = s_15403.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_15403[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_15403[i] < 128)
        asciiPart[i] = fcc(s_15403[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  

	
}

function raiseException(e_14406, ename_14407) {
		e_14406.name = ename_14407;
		if ((excHandler == 0)) {
		unhandledException(e_14406);
		}
		
		e_14406.trace = nimCopy(null, rawWriteStackTrace_14228(), NTI138);
		throw e_14406;

	
}

function addInt(a_17803, b_17804) {
		      var result = a_17803 + b_17804;
      if (result > 2147483647 || result < -2147483648) raiseOverflow();
      return result;
    

	
}

function reprInt(x_21203) {
	var result_21204 = null;

	var F={procname:"system.reprInt",prev:framePtr,filename:"lib\\system\\reprjs.nim",line:0};
	framePtr = F;
	BeforeRet: do {
		F.line = 11;
		result_21204 = nimCopy(null, cstrToNimstr((x_21203)+""), NTI138);
		break BeforeRet;
	} while (false);
	framePtr = F.prev;

	return result_21204;

}
var nimvm_6539 = false;
var nim_program_result = 0;
var globalRaiseHook_12005 = [null];
var localRaiseHook_12010 = [null];
var outOfMemHook_12013 = [null];
var money_28001 = [0];

function isFatPointer_20201(ti_20203) {
	var result_20204 = false;

	BeforeRet: do {
		result_20204 = !((ConstSet1[ti_20203.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_20204;

}

function nimCopyAux(dest_20222, src_20223, n_20225) {
		switch (n_20225.kind) {
		case 0:
			break;
		case 1:
			      dest_20222[n_20225.offset] = nimCopy(dest_20222[n_20225.offset], src_20223[n_20225.offset], n_20225.typ);
    
			break;
		case 2:
			L1: do {
				var i_20615 = 0;
				var colontmp__20617 = 0;
				colontmp__20617 = (n_20225.len - 1);
				var res_20620 = 0;
				L2: do {
						L3: while (true) {
						if (!(res_20620 <= colontmp__20617)) break L3;
							i_20615 = res_20620;
							nimCopyAux(dest_20222, src_20223, n_20225.sons[i_20615]);
							res_20620 += 1;
						}
				} while(false);
			} while(false);
			break;
		case 3:
			      dest_20222[n_20225.offset] = nimCopy(dest_20222[n_20225.offset], src_20223[n_20225.offset], n_20225.typ);
      for (var i = 0; i < n_20225.sons.length; ++i) {
        nimCopyAux(dest_20222, src_20223, n_20225.sons[i][1]);
      }
    
			break;
		}

	
}

function add_12029(x_12032, x_12032_Idx, y_12033) {
		        var len = x_12032[0].length-1;
        for (var i = 0; i < y_12033.length; ++i) {
          x_12032[0][len] = y_12033.charCodeAt(i);
          ++len;
        }
        x_12032[0][len] = 0
      

	
}

function auxWriteStackTrace_14004(f_14006) {
					var Tmp3;

	var result_14007 = [null];

		var it_14015 = f_14006;
		var i_14016 = 0;
		var total_14017 = 0;
		var tempFrames_14021 = arrayConstr(64, {Field0: null, Field1: 0}, NTI14009);
		L1: do {
				L2: while (true) {
					if (!!((it_14015 == null))) Tmp3 = false; else {						Tmp3 = (i_14016 <= 63);					}				if (!Tmp3) break L2;
					tempFrames_14021[i_14016].Field0 = it_14015.procname;
					tempFrames_14021[i_14016].Field1 = it_14015.line;
					i_14016 += 1;
					total_14017 += 1;
					it_14015 = it_14015.prev;
				}
		} while(false);
		L4: do {
				L5: while (true) {
				if (!!((it_14015 == null))) break L5;
					total_14017 += 1;
					it_14015 = it_14015.prev;
				}
		} while(false);
		result_14007[0] = nimCopy(null, makeNimstrLit(""), NTI138);
		if (!((total_14017 == i_14016))) {
		if (result_14007[0] != null) { result_14007[0] = (result_14007[0].slice(0, -1)).concat(makeNimstrLit("(")); } else { result_14007[0] = makeNimstrLit("(");};
		if (result_14007[0] != null) { result_14007[0] = (result_14007[0].slice(0, -1)).concat(cstrToNimstr(((total_14017 - i_14016))+"")); } else { result_14007[0] = cstrToNimstr(((total_14017 - i_14016))+"");};
		if (result_14007[0] != null) { result_14007[0] = (result_14007[0].slice(0, -1)).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_14007[0] = makeNimstrLit(" calls omitted) ...\x0A");};
		}
		
		L6: do {
			var j_14215 = 0;
			var colontmp__14221 = 0;
			colontmp__14221 = (i_14016 - 1);
			var res_14224 = colontmp__14221;
			L7: do {
					L8: while (true) {
					if (!(0 <= res_14224)) break L8;
						j_14215 = res_14224;
						add_12029(result_14007, 0, tempFrames_14021[j_14215].Field0);
						if ((0 < tempFrames_14021[j_14215].Field1)) {
						if (result_14007[0] != null) { result_14007[0] = (result_14007[0].slice(0, -1)).concat(makeNimstrLit(", line: ")); } else { result_14007[0] = makeNimstrLit(", line: ");};
						if (result_14007[0] != null) { result_14007[0] = (result_14007[0].slice(0, -1)).concat(cstrToNimstr((tempFrames_14021[j_14215].Field1)+"")); } else { result_14007[0] = cstrToNimstr((tempFrames_14021[j_14215].Field1)+"");};
						}
						
						if (result_14007[0] != null) { result_14007[0] = (result_14007[0].slice(0, -1)).concat(makeNimstrLit("\x0A")); } else { result_14007[0] = makeNimstrLit("\x0A");};
						res_14224 -= 1;
					}
			} while(false);
		} while(false);

	return result_14007[0];

}

function rawWriteStackTrace_14228() {
	var result_14230 = null;

		if (!((framePtr == null))) {
		result_14230 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A").slice(0,-1)).concat(auxWriteStackTrace_14004(framePtr)), NTI138);
		}
		else {
			result_14230 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI138);
		}
		

	return result_14230;

}

function unhandledException(e_14253) {
			var Tmp1;

		var buf_14254 = [makeNimstrLit("")];
			if (!!(eqStrings(e_14253.message, null))) Tmp1 = false; else {				Tmp1 = !((e_14253.message[0] == 0));			}		if (Tmp1) {
		if (buf_14254[0] != null) { buf_14254[0] = (buf_14254[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_14254[0] = makeNimstrLit("Error: unhandled exception: ");};
		if (buf_14254[0] != null) { buf_14254[0] = (buf_14254[0].slice(0, -1)).concat(e_14253.message); } else { buf_14254[0] = e_14253.message;};
		}
		else {
		if (buf_14254[0] != null) { buf_14254[0] = (buf_14254[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_14254[0] = makeNimstrLit("Error: unhandled exception");};
		}
		
		if (buf_14254[0] != null) { buf_14254[0] = (buf_14254[0].slice(0, -1)).concat(makeNimstrLit(" [")); } else { buf_14254[0] = makeNimstrLit(" [");};
		add_12029(buf_14254, 0, e_14253.name);
		if (buf_14254[0] != null) { buf_14254[0] = (buf_14254[0].slice(0, -1)).concat(makeNimstrLit("]\x0A")); } else { buf_14254[0] = makeNimstrLit("]\x0A");};
		if (buf_14254[0] != null) { buf_14254[0] = (buf_14254[0].slice(0, -1)).concat(rawWriteStackTrace_14228()); } else { buf_14254[0] = rawWriteStackTrace_14228();};
		var cbuf_14401 = toJSStr(buf_14254[0]);
		framePtr = null;
		  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_14401);
  }
  else {
    throw cbuf_14401;
  }
  

	
}

function raiseOverflow() {
		var e_14840 = null;
		e_14840 = {m_type: NTI3644, parent: null, name: null, message: null, trace: null, up: null};
		e_14840.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI138);
		e_14840.parent = null;
		raiseException(e_14840, "OverflowError");

	
}

function chnageImage_28002(img_28004, price_28005) {
	var F={procname:"main.chnageImage",prev:framePtr,filename:"main.nim",line:0};
	framePtr = F;
		if ((money_28001[0] == price_28005)) {
		F.line = 6;
		var moneyImage_28006 = document.getElementById("paymentImg");
		F.line = 7;
		moneyImage_28006.innerHTML = toJSStr((makeNimstrLit("<img src=\"images/payment/").slice(0,-1)).concat(img_28004.slice(0,-1),makeNimstrLit("\"></img>")));
		}
		else {
		}
		
		F.line = 10;
		var haveMoney_28007 = document.getElementById("haveMoney");
		F.line = 11;
		haveMoney_28007.innerHTML = toJSStr((makeNimstrLit("\xE6\x89\x80\xE6\x8C\x81\xE9\x87\x91").slice(0,-1)).concat(reprInt(money_28001[0]).slice(0,-1),makeNimstrLit("$")));
	framePtr = F.prev;

	
}

function payment() {
	var F={procname:"main.payment",prev:framePtr,filename:"main.nim",line:0};
	framePtr = F;
		F.line = 15;
		money_28001[0] = addInt(money_28001[0], 1);
		F.line = 16;
		chnageImage_28002(makeNimstrLit("sekiyuou.png"), 10000);
		F.line = 17;
		chnageImage_28002(makeNimstrLit("okanemochi.png"), 1000);
		F.line = 18;
		chnageImage_28002(makeNimstrLit("keizai_fuyuusou.png"), 100);
		F.line = 19;
		chnageImage_28002(makeNimstrLit("keizai_chukansou.png"), 10);
	framePtr = F.prev;

	
}
