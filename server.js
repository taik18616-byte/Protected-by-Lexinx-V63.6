const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const PAYLOAD = String.raw`
local _l0OlOIlOOIoOo1lI01llolo10Io0l0Ol = getgenv and getgenv() or _G
local l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo = bit32 or bit
if not l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo then warn("[V52] Err 1: Bit missing") return end
local llI0oolI0oolI0oolI0oolI0oo = l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo.bxor
local _ooIIl1o1ooIIl1o1ooIIl1o1ooIIl1o1 = l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo.band
local oOo1o0lIOl0o0lOlOlo100lIolo1O001OII0I00O1IO1I = l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo.bor
local O1110O1110O1110O1110O1110O = l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo.lshift
local _0lloO000lloO000lloO000lloO000lloO000lloO00 = l1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo1I01lOo.rshift
local C,B,J = string.char,string.byte,table.concat

local o1lIllOl0OOlol1o101oIIOO1I1IOlOOO = 0
for i = 1, 53 do o1lIllOl0OOlol1o101oIIOO1I1IOlOOO = o1lIllOl0OOlol1o101oIIOO1I1IOlOOO + (i * i * i) % 131 end
if o1lIllOl0OOlol1o101oIIOO1I1IOlOOO ~= 2982 then return end

local OooI0IOooI0IOooI0IOooI0IOooI0IO = 0
for i = 1, 36 do OooI0IOooI0IOooI0IOooI0IOooI0IO = OooI0IOooI0IOooI0IOooI0IOooI0IO + (i * i * i * i) % 251 end
if OooI0IOooI0IOooI0IOooI0IOooI0IO ~= 4022 then return end

if type(_l0OlOIlOOIoOo1lI01llolo10Io0l0Ol) ~= "table" then _l0OlOIlOOIoOo1lI01llolo10Io0l0Ol = _G end
local I01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo = _l0OlOIlOOIoOo1lI01llolo10Io0l0Ol.loadstring or loadstring
if type(I01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo) ~= "function" then warn("[V52] Err 2: loadstring missing") return end
local I1I1llOOol1II0OoO11oIoI10oOloI10OoOooOOO0OooIOl0oIl = _l0OlOIlOOIoOo1lI01llolo10Io0l0Ol.pcall or pcall
if type(I1I1llOOol1II0OoO11oIoI10oOloI10OoOooOOO0OooIOl0oIl) ~= "function" then warn("[V52] Err 3: pcall missing") return end

do local l0IOl0llOol1ooO1I1I0O1IllIooloo = 0 for i = 1, 19 do l0IOl0llOol1ooO1I1I0O1IllIooloo = l0IOl0llOol1ooO1I1I0O1IllIooloo + (i * 7 + 3) % 199 end if l0IOl0llOol1ooO1I1I0O1IllIooloo ~= 1387 then l0IOl0llOol1ooO1I1I0O1IllIooloo = 0 end end
do local Il0IIl0IIl0IIl0IIl0II = 0 for i = 1, 27 do Il0IIl0IIl0IIl0IIl0II = Il0IIl0IIl0IIl0IIl0II + (i * i + i * 3 + 7) % 331 end if Il0IIl0IIl0IIl0IIl0II ~= 3619 then Il0IIl0IIl0IIl0IIl0II = 0 end end

local function IIOIo10o0Il01oI110oOol01OOOOoO0ooOOlo0loo0IOIO(sk, sv)
    local o = {}
    for i = 1, #sv do
        local p = sv:sub(i, i)
        if p == ',' then o[#o+1] = '' 
        else o[#o] = (o[#o] or '') .. p end
    end
    local r = {}
    for i = 1, #o do r[i] = C(llI0oolI0oolI0oolI0oolI0oo(tonumber(o[i]), sk)) end
    return J(r)
end

local Io11OOOlII1lolol1OlI10ll1ll0Il0lI10OIOoOoIIo1I0 = IIOIo10o0Il01oI110oOol01OOOOoO0ooOOlo0loo0IOIO(140, "224,227,237,232,255,248,254,229,226,235")
local O0OIo1l00OIo1l00OIo1l00OIo1l0 = IIOIo10o0Il01oI110oOol01OOOOoO0ooOOlo0loo0IOIO(70, "54,37,39,42,42")
local IlIo0olIo0olIo0o = IIOIo10o0Il01oI110oOol01OOOOoO0ooOOlo0loo0IOIO(242, "134,139,130,151")
local loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0 = IIOIo10o0Il01oI110oOol01OOOOoO0ooOOlo0loo0IOIO(103, "16,6,21,9")

-- FIX LỖI BASE64 DECODER BỊ HỎNG KHI XỬ LÝ CHUỖI LỚN
local function oOOloI1lOOOloI1lOOOloI1lOOOloI1lOOOloI1lO(data)
    local b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    data = string.gsub(data, '[^'..b..'=]', '')
    return (data:gsub('.', function(x)
        if x == '=' then return 'A' end
        local r, f = '', (b:find(x) - 1)
        for i = 5, 0, -1 do r = r .. (f >= 2^i and '1' or '0'); f = f % 2^i end
        return r
    end):gsub('%d%d%d%d%d%d%d%d', function(x)
        if #x == 8 then
            local c = 0
            for i = 1, 8 do c = c + (x:sub(i, i) == '1' and 2^(8 - i) or 0) end
            return C(c)
        end
        return ''
    end))
end

local function Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(s, a, b, c, d)
    s[a] = (s[a] + s[b]) % 0x100000000; s[d] = llI0oolI0oolI0oolI0oolI0oo(s[d], s[a]); s[d] = oOo1o0lIOl0o0lOlOlo100lIolo1O001OII0I00O1IO1I(O1110O1110O1110O1110O1110O(s[d], 16), _0lloO000lloO000lloO000lloO000lloO000lloO00(s[d], 16))
    s[c] = (s[c] + s[d]) % 0x100000000; s[b] = llI0oolI0oolI0oolI0oolI0oo(s[b], s[c]); s[b] = oOo1o0lIOl0o0lOlOlo100lIolo1O001OII0I00O1IO1I(O1110O1110O1110O1110O1110O(s[b], 12), _0lloO000lloO000lloO000lloO000lloO000lloO00(s[b], 20))
    s[a] = (s[a] + s[b]) % 0x100000000; s[d] = llI0oolI0oolI0oolI0oolI0oo(s[d], s[a]); s[d] = oOo1o0lIOl0o0lOlOlo100lIolo1O001OII0I00O1IO1I(O1110O1110O1110O1110O1110O(s[d], 8), _0lloO000lloO000lloO000lloO000lloO000lloO00(s[d], 24))
    s[c] = (s[c] + s[d]) % 0x100000000; s[b] = llI0oolI0oolI0oolI0oolI0oo(s[b], s[c]); s[b] = oOo1o0lIOl0o0lOlOlo100lIolo1O001OII0I00O1IO1I(O1110O1110O1110O1110O1110O(s[b], 7), _0lloO000lloO000lloO000lloO000lloO000lloO00(s[b], 25))
end

local function O0lIl0ooI0OIOI0l0000IoIIll1Il10(key, counter, nonce)
    local s = {0x61707865, 0x3320646e, 0x79622d32, 0x6b206574, key[1], key[2], key[3], key[4], key[5], key[6], key[7], key[8], counter, nonce[1], nonce[2], nonce[3]}
    local w = {}
    for i = 1, 16 do w[i] = s[i] end
    for _ = 1, 10 do
        Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,1,5,9,13); Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,2,6,10,14); Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,3,7,11,15); Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,4,8,12,16)
        Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,1,6,11,16); Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,2,7,12,13); Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,3,8,9,14); Oo01Io0IIoOIo1IIl000l0IIlIooI0IlIIoIoOoOOlI0l0l(w,4,5,10,15)
    end
    for i = 1, 16 do w[i] = (w[i] + s[i]) % 0x100000000 end
    return w
end

local function l1oI1IOIooIO1O1lI1o0lIoOl0lO01Oo1OOOoIlOlI(data, key, nonce)
    local o = {}; local counter = 1; local pos = 1; local dn = #data
    while pos <= dn do
        local blk = O0lIl0ooI0OIOI0l0000IoIIll1Il10(key, counter, nonce); counter = counter + 1
        local ks = {}
        for wi = 1, 16 do
            local w = blk[wi]
            ks[#ks+1] = _ooIIl1o1ooIIl1o1ooIIl1o1ooIIl1o1(w, 0xFF); ks[#ks+1] = _ooIIl1o1ooIIl1o1ooIIl1o1ooIIl1o1(_0lloO000lloO000lloO000lloO000lloO000lloO00(w, 8), 0xFF)
            ks[#ks+1] = _ooIIl1o1ooIIl1o1ooIIl1o1ooIIl1o1(_0lloO000lloO000lloO000lloO000lloO000lloO00(w, 16), 0xFF); ks[#ks+1] = _ooIIl1o1ooIIl1o1ooIIl1o1ooIIl1o1(_0lloO000lloO000lloO000lloO000lloO000lloO00(w, 24), 0xFF)
        end
        for i = 0, 63 do
            if pos + i > dn then break end
            o[pos + i] = C(llI0oolI0oolI0oolI0oolI0oo(B(data, pos + i), ks[i + 1]))
        end
        pos = pos + 64
    end
    return J(o)
end

local function O10OoIlOlo111111Oo01IIOO0O0O1OI1llI0I1(data, sbox)
    local o = {}
    for i = 1, #data do o[i] = C(sbox[B(data, i) + 1]) end
    return J(o)
end

local function OOIooIOIooIOIooI(data, iv)
    local t = {}
    for i = 1, #data do t[i] = B(data, i) end
    for i = #t, 2, -1 do t[i] = llI0oolI0oolI0oolI0oolI0oo(t[i], t[i - 1]) end
    t[1] = llI0oolI0oolI0oolI0oolI0oo(t[1], iv)
    local o = {}
    for i = 1, #t do o[i] = C(t[i]) end
    return J(o)
end

local function l0olIoo1OIO011lOOOlIO11I1O0OIlll0OoIloI0Il(data, pk)
    local o = {}
    for i = 1, #data do o[i] = C(llI0oolI0oolI0oolI0oolI0oo(B(data, i), ((i - 1) * pk + 85) % 256)) end
    return J(o)
end

-- FETCH SESSION KEY TỪ SERVER
local req = (syn and syn.request) or request or http_request or (http and http.request) or (fluxus and fluxus.request) or (delta and delta.request)
if type(req) ~= "function" then warn("[V52] Err 3: req missing") return end
local res = req({Url = "https://wed-ma-hoa.onrender.com/api/get_keys/9433579285837272.lua.txt", Method = "GET"})
if not res or res.StatusCode ~= 200 then warn("[V52] Err 4: Status not 200") return end
local keys_fn, keys_err = I01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo(res.Body)
if not keys_fn then warn("[V52] Err 5: keys_fn missing: " .. tostring(keys_err)) return end
local KEYS = keys_fn()
if type(KEYS) ~= "table" then warn("[V52] Err 6: KEYS not table") return end

local IlooIl0OO101OIOo0llo1I0oloOIO0oOll1oo1OOlol = 37783
local OIOO1lOolOIIOIO0l0O10O0Il0O1ll0O0ol01O101I0I = 49673
local o01OIolOI1IlllOIolI0o0lI1Oo1o0I1OIo0IoO1l0Ol = 60437
local oO111lo0loOI010lo0l0lolOOOol1lOlOlo = 33010
local IIlolI0olo00Ool1IOOOlO10lOO0IOool0o0OoOo = 48908
local OIO10oo0IO10oo0IO10oo0IO10oo0IO10oo0IO10oo0 = 2080
local Ilo01o01o1l0OOlI1O1OoooOOl010IO11ll0lo001o0Ool1oOIl = 47610
local _01IO01O00I10OoO10I1l0o00Oo0olIIlOllo = 57658
local O00OO000OO000OO000OO0 = 24646
local oOII110oIOII110oIOII110oI = 44332
local O1Io0ll01Io0ll01Io0ll01Io0ll01Io0ll0 = 10866
local O001000100010 = 5331

local l0l0o10OoIIoo1o1l0lo0lo110IolOo0l1l1O000o1IoII = {37783,49673,60437,33010,48908,2080,47610,57658,24646,44332,10866,5331}
local OIO100ll01l01ll1lol0oOOOO1000I1110o0OIIO1O11o0OOll = "==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"
local oIlOo11O01O1oOI110I1ooo1O01o00oO0I11l0ol0 = {19716,26473,5572,14071,22994,6379,38072,29708,19442,64734}
local _O000O000O000 = 62718
for i = 1, #oIlOo11O01O1oOI110I1ooo1O01o00oO0I11l0ol0 do oIlOo11O01O1oOI110I1ooo1O01o00oO0I11l0ol0[i] = llI0oolI0oolI0oolI0oolI0oo(oIlOo11O01O1oOI110I1ooo1O01o00oO0I11l0ol0[i], _O000O000O000) end

local I0lIo0lIo0lIo0lIo0lIo = {}
local O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l = 0
local Ool0lol0lol0lol0l = 0

local OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I = {}
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[IlooIl0OO101OIOo0llo1I0oloOIO0oOll1oo1OOlol] = function(d) return l0olIoo1OIO011lOOOlIO11I1O0OIlll0OoIloI0Il(d, KEYS.pk) end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[OIOO1lOolOIIOIO0l0O10O0Il0O1ll0O0ol01O101I0I] = function(d) return OOIooIOIooIOIooI(d, KEYS.iv) end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[o01OIolOI1IlllOIolI0o0lI1Oo1o0I1OIo0IoO1l0Ol] = function(d) return O10OoIlOlo111111Oo01IIOO0O0O1OI1llI0I1(d, KEYS.sbox) end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[oO111lo0loOI010lo0l0lolOOOol1lOlOlo] = function(d) return l1oI1IOIooIO1O1lI1o0lIoOl0lO01Oo1OOOoIlOlI(d, KEYS.ckey, KEYS.cnonce) end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[IIlolI0olo00Ool1IOOOlO10lOO0IOool0o0OoOo] = function(d)
    local h1 = 0; for i = 1, #d do h1 = (h1 * 31 + B(d, i)) % 2147483647 end
    local h2 = 0; for i = 1, #d do h2 = (h2 * 37 + B(d, i)) % 2147483647 end
    if h1 ~= KEYS.ph1 or h2 ~= KEYS.ph2 then if loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0 then loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0("[V52] Err 4: Hash mismatch") end return nil end
    return d
end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[OIO10oo0IO10oo0IO10oo0IO10oo0IO10oo0IO10oo0] = function(d)
    local f, e = I01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo01I0Oloo(d, "UserScript")
    if f then 
        local s, err = I1I1llOOol1II0OoO11oIoI10oOloI10OoOooOOO0OooIOl0oIl(f)
        if not s and loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0 then loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0("[V52 Runtime] " .. tostring(err)) end
    elseif loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0 then loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0("[V52 Compile] " .. tostring(e)) end
    return nil
end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[Ilo01o01o1l0OOlI1O1OoooOOl010IO11ll0lo001o0Ool1oOIl] = function(d) Ool0lol0lol0lol0l = (Ool0lol0lol0lol0l + 1) % 65537; return d end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[_01IO01O00I10OoO10I1l0o00Oo0olIIlOllo] = function(d) I0lIo0lIo0lIo0lIo0lIo[O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l+1] = Ool0lol0lol0lol0l; O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l = O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l + 1; return d end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[O00OO000OO000OO000OO0] = function(d) if O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l > 0 then O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l = O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l - 1 end; return d end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[oOII110oIOII110oIOII110oI] = function(d) Ool0lol0lol0lol0l = llI0oolI0oolI0oolI0oolI0oo(Ool0lol0lol0lol0l, 22351); return d end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[O1Io0ll01Io0ll01Io0ll01Io0ll01Io0ll0] = function(d) I0lIo0lIo0lIo0lIo0lIo[O00OOOIIlOO111lIl0Io00oIIoIo0OI1l0IO0loo111OlIo0l+1] = _ooIIl1o1ooIIl1o1ooIIl1o1ooIIl1o1(Ool0lol0lol0lol0l, 0xFF); return d end
OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[O001000100010] = function(d) return nil end

local l1I1OO1IlO0l1o0olOl01O0OIl0oIloII0_t = {}
for i = #OIO100ll01l01ll1lol0oOOOO1000I1110o0OIIO1O11o0OOll, 1, -1 do l1I1OO1IlO0l1o0olOl01O0OIl0oIloII0_t[#(l1I1OO1IlO0l1o0olOl01O0OIl0oIloII0_t)+1] = string.sub(OIO100ll01l01ll1lol0oOOOO1000I1110o0OIIO1O11o0OOll, i, i) end
local l1I1OO1IlO0l1o0olOl01O0OIl0oIloII0 = J(l1I1OO1IlO0l1o0olOl01O0OIl0oIloII0_t)
local o0olOII1O0olOII1O0olOII1O0olOII1O = oOOloI1lOOOloI1lOOOloI1lOOOloI1lOOOloI1lO(l1I1OO1IlO0l1o0olOl01O0OIl0oIloII0)

for Ioo1ooOoo1ooOoo1ooOoo1ooOoo1ooOoo1ooO = 1, #oIlOo11O01O1oOI110I1ooo1O01o00oO0I11l0ol0 do
    local op = oIlOo11O01O1oOI110I1ooo1O01o00oO0I11l0ol0[Ioo1ooOoo1ooOoo1ooOoo1ooOoo1ooOoo1ooO]
    local handler = OO0ll01oolIO1I1l0IIO10IolOIO0l00IOIloo1ll1I[op]
    if not handler then if loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0 then loOOlIO1o0lo00o10011lOlIl0OIOI0lIllOo0("[V52] Err 5: VM op missing") end return end
    o0olOII1O0olOII1O0olOII1O0olOII1O = handler(o0olOII1O0olOII1O0olOII1O0olOII1O)
    if o0olOII1O0olOII1O0olOII1O0olOII1O == nil then return end
end
`;

app.get("/", (req, res) => {
    res.type("text").send("cc");
});

app.get("/api/827e82jx828282js", (req, res) => {
    res.type("text/plain").send(PAYLOAD);
});

app.listen(PORT, () => {
    console.log("LEXINX API running on port " + PORT);
});
