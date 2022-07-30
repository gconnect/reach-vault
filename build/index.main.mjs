// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v130 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v131 = stdlib.protect(ctc0, interact.inheritance, 'for Alice\'s interact field inheritance');
  
  const txn1 = await (ctc.sendrecv({
    args: [v131, v130],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v131, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135, v136], secs: v138, time: v137, didSend: v31, from: v134 } = txn1;
      
      sim_r.txns.push({
        amt: v135,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v135, v136], secs: v138, time: v137, didSend: v31, from: v134 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v145], secs: v147, time: v146, didSend: v40, from: v144 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v134, v135, v144],
    evt_cnt: 0,
    funcNum: 2,
    lct: v146,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:77:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v150, time: v149, didSend: v45, from: v148 } = txn3;
      
      ;
      const v152 = true;
      const v153 = v149;
      const v160 = v135;
      
      if (await (async () => {
        
        return v152;})()) {
        const v169 = stdlib.add(v153, stdlib.checkedBigNumberify('./index.rsh:3:24:decimal', stdlib.UInt_max, '2'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v144,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v45, from: v148 } = txn3;
  ;
  const v151 = stdlib.addressEq(v134, v148);
  stdlib.assert(v151, {
    at: './index.rsh:77:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v152 = true;
  let v153 = v149;
  let v160 = v135;
  
  while (await (async () => {
    
    return v152;})()) {
    const v169 = stdlib.add(v153, stdlib.checkedBigNumberify('./index.rsh:3:24:decimal', stdlib.UInt_max, '2'));
    const v173 = stdlib.protect(ctc1, await interact.getChoice(), {
      at: './index.rsh:84:56:application',
      fs: ['at ./index.rsh:83:11:application call to [unknown function] (defined at: ./index.rsh:83:15:function exp)'],
      msg: 'getChoice',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v134, v135, v144, v160, v169, v173],
      evt_cnt: 1,
      funcNum: 4,
      lct: v153,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:86:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v175], secs: v177, time: v176, didSend: v60, from: v174 } = txn4;
        
        ;
        const cv152 = v175;
        const cv153 = v176;
        const cv160 = v160;
        
        await (async () => {
          const v152 = cv152;
          const v153 = cv153;
          const v160 = cv160;
          
          if (await (async () => {
            
            return v152;})()) {
            const v169 = stdlib.add(v153, stdlib.checkedBigNumberify('./index.rsh:3:24:decimal', stdlib.UInt_max, '2'));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v144,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v169],
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v134, v135, v144, v160, v169],
        evt_cnt: 0,
        funcNum: 5,
        lct: v153,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v181, time: v180, didSend: v80, from: v179 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v134,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v181, time: v180, didSend: v80, from: v179 } = txn5;
      ;
      const v182 = stdlib.addressEq(v134, v179);
      const v183 = stdlib.addressEq(v144, v179);
      const v184 = v182 ? true : v183;
      stdlib.assert(v184, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:87:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:52:29:application',
        fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:87:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v175], secs: v177, time: v176, didSend: v60, from: v174 } = txn4;
      ;
      const v178 = stdlib.addressEq(v134, v174);
      stdlib.assert(v178, {
        at: './index.rsh:86:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv152 = v175;
      const cv153 = v176;
      const cv160 = v160;
      
      v152 = cv152;
      v153 = cv153;
      v160 = cv160;
      
      continue;}
    
    }
  ;
  const v208 = stdlib.add(v153, stdlib.checkedBigNumberify('./index.rsh:3:24:decimal', stdlib.UInt_max, '2'));
  stdlib.protect(ctc2, await interact.showTime(v208), {
    at: './index.rsh:96:22:application',
    fs: ['at ./index.rsh:95:7:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
    msg: 'showTime',
    who: 'Alice'
    });
  stdlib.protect(ctc2, await interact.seeOutcome(false), {
    at: './index.rsh:97:24:application',
    fs: ['at ./index.rsh:95:7:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135, v136], secs: v138, time: v137, didSend: v31, from: v134 } = txn1;
  ;
  const v143 = stdlib.protect(ctc1, await interact.acceptTerms(v135), {
    at: './index.rsh:44:49:application',
    fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v135, v143],
    evt_cnt: 1,
    funcNum: 1,
    lct: v137,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v145], secs: v147, time: v146, didSend: v40, from: v144 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v145], secs: v147, time: v146, didSend: v40, from: v144 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v45, from: v148 } = txn3;
  ;
  const v151 = stdlib.addressEq(v134, v148);
  stdlib.assert(v151, {
    at: './index.rsh:77:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  let v152 = true;
  let v153 = v149;
  let v160 = v135;
  
  while (await (async () => {
    
    return v152;})()) {
    const v169 = stdlib.add(v153, stdlib.checkedBigNumberify('./index.rsh:3:24:decimal', stdlib.UInt_max, '2'));
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: ['time', v169],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v134, v135, v144, v160, v169],
        evt_cnt: 0,
        funcNum: 5,
        lct: v153,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v181, time: v180, didSend: v80, from: v179 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v134,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v181, time: v180, didSend: v80, from: v179 } = txn5;
      ;
      const v182 = stdlib.addressEq(v134, v179);
      const v183 = stdlib.addressEq(v144, v179);
      const v184 = v182 ? true : v183;
      stdlib.assert(v184, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:87:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:52:29:application',
        fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:87:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v175], secs: v177, time: v176, didSend: v60, from: v174 } = txn4;
      ;
      const v178 = stdlib.addressEq(v134, v174);
      stdlib.assert(v178, {
        at: './index.rsh:86:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const cv152 = v175;
      const cv153 = v176;
      const cv160 = v160;
      
      v152 = cv152;
      v153 = cv153;
      v160 = cv160;
      
      continue;}
    
    }
  ;
  const v212 = stdlib.add(v153, stdlib.checkedBigNumberify('./index.rsh:3:24:decimal', stdlib.UInt_max, '2'));
  stdlib.protect(ctc2, await interact.showTime(v212), {
    at: './index.rsh:96:22:application',
    fs: ['at ./index.rsh:95:7:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
    msg: 'showTime',
    who: 'Bob'
    });
  stdlib.protect(ctc2, await interact.seeOutcome(false), {
    at: './index.rsh:97:24:application',
    fs: ['at ./index.rsh:95:7:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAECBSAIUEgmAgEAACI1ADEYQQJnKWRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEAA9kmBBAxAAK5JJQxAAFIlEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLAyBjQDIQZbD0Q0/zEAEjQDVyggMQASEUSxIrIBNAMhB1uyCCOyEDT/sgezQgGLSCU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFFzX+gATu5+giNP4WUQcIULAyBjQDIQZbDEQ0/zEAEkQ0/zQDIQRbNANXKCA0/jIGNAMhB1tCAOgkEkQkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEQbFATbA0/zEAEkQ0/zT+NANXKCAjMgY0/kIAp0kjDEAAUEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BRc1/YAED7/GNDT9FlEHCFCwNP80/hZQMQBQKEsBVwBIZ0gkNQEyBjUCQgC5SIGgjQaIAQIiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBVs1/oAErNEfwzT/FlA0/hZQsDT/iADRMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBoNf81/jX9Nfw1+zX6NP1BACk0/iQINfk0+jT7FlA0/FA0/xZQNPkWUChLAVcAWGdIJTUBMgY1AkIALrEisgE0+7III7IQNPyyB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v145",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v175",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v145",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v175",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001075380380620010758339810160408190526200002691620001ff565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602081015151620000929034146007620000f8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000ef926002929091019062000122565b5050506200029c565b816200011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000130906200025f565b90600052602060002090601f0160209004810192826200015457600085556200019f565b82601f106200016f57805160ff19168380011785556200019f565b828001600101855582156200019f579182015b828111156200019f57825182559160200191906001019062000182565b50620001ad929150620001b1565b5090565b5b80821115620001ad5760008155600101620001b2565b604080519081016001600160401b0381118282101715620001f957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200021357600080fd5b6200021d620001c8565b835181526040601f19830112156200023457600080fd5b6200023e620001c8565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200027457607f821691505b602082108114156200029657634e487b7160e01b600052602260045260246000fd5b50919050565b610dc980620002ac6000396000f3fe60806040526004361061006e5760003560e01c80638e3147691161004b5780638e314769146100c35780639a3e3912146100d6578063a98bf223146100e9578063ab53f2c6146100fc57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610aa2565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610aa2565b6102a8565b6100756100e4366004610aa2565b61045a565b6100756100f7366004610aa2565b6105f6565b34801561010857600080fd5b5061011161079d565b604051610092929190610ac5565b61012f600260005414600d61083a565b6101498135158061014257506001548235145b600e61083a565b60008080556002805461015b90610b22565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610b22565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610b73565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161021f929190610bf6565b60405180910390a16102333415600b61083a565b805161024b906001600160a01b03163314600c61083a565b61025361096d565b815181516001600160a01b0391821690526020808401805184518301526040808601518551941693810193909352818401805160019052805143930192909252519051909101526102a38161085f565b505050565b6102b8600560005414601661083a565b6102d2813515806102cb57506001548235145b601761083a565b6000808055600280546102e490610b22565b80601f016020809104026020016040519081016040528092919081815260200182805461031090610b22565b801561035d5780601f106103325761010080835404028352916020019161035d565b820191906000526020600020905b81548152906001019060200180831161034057829003601f168201915b50505050508060200190518101906103759190610c2b565b90506103898160800151431015601861083a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516103ba929190610bf6565b60405180910390a16103ce3415601461083a565b8051610402906001600160a01b031633146103f85760408201516001600160a01b031633146103fb565b60015b601561083a565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561043f573d6000803e3d6000fd5b5060008080556001819055610456906002906109b4565b5050565b61046a600160005414600961083a565b6104848135158061047d57506001548235145b600a61083a565b60008080556002805461049690610b22565b80601f01602080910402602001604051908101604052809291908181526020018280546104c290610b22565b801561050f5780601f106104e45761010080835404028352916020019161050f565b820191906000526020600020905b8154815290600101906020018083116104f257829003601f168201915b50505050508060200190518101906105279190610cb5565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338360405161055a929190610d35565b60405180910390a161056e3415600861083a565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260029095554360015587519384019490945290519582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906105f09291906109f1565b50505050565b610606600560005414601161083a565b6106208135158061061957506001548235145b601261083a565b60008080556002805461063290610b22565b80601f016020809104026020016040519081016040528092919081815260200182805461065e90610b22565b80156106ab5780601f10610680576101008083540402835291602001916106ab565b820191906000526020600020905b81548152906001019060200180831161068e57829003601f168201915b50505050508060200190518101906106c39190610c2b565b90506106d681608001514310601361083a565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610707929190610d35565b60405180910390a161071b3415600f61083a565b8051610733906001600160a01b03163314601061083a565b61073b61096d565b815181516001600160a01b03918216905260208084015183518201526040808501518451931692810192909252610776918501908501610d52565b6020808301805192151590925281514391015260608301519051604001526102a38161085f565b6000606060005460028080546107b290610b22565b80601f01602080910402602001604051908101604052809291908181526020018280546107de90610b22565b801561082b5780601f106108005761010080835404028352916020019161082b565b820191906000526020600020905b81548152906001019060200180831161080e57829003601f168201915b50505050509050915091509091565b816104565760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151511561092a57600282602001516020015161088e9190610d6d565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b519788019890985294519986019990995291519094169383019390935291519481019490945251908301529060c0016105cc565b815160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561043f573d6000803e3d6000fd5b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b5080546109c090610b22565b6000825580601f106109d0575050565b601f0160209004906000526020600020908101906109ee9190610a75565b50565b8280546109fd90610b22565b90600052602060002090601f016020900481019282610a1f5760008555610a65565b82601f10610a3857805160ff1916838001178555610a65565b82800160010185558215610a65579182015b82811115610a65578251825591602001919060010190610a4a565b50610a71929150610a75565b5090565b5b80821115610a715760008155600101610a76565b600060408284031215610a9c57600080fd5b50919050565b600060408284031215610ab457600080fd5b610abe8383610a8a565b9392505050565b82815260006020604081840152835180604085015260005b81811015610af957858101830151858201606001528201610add565b81811115610b0b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b3657607f821691505b60208210811415610a9c57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b6e57600080fd5b919050565b600060608284031215610b8557600080fd5b6040516060810181811067ffffffffffffffff82111715610bb657634e487b7160e01b600052604160045260246000fd5b604052610bc283610b57565b815260208301516020820152610bda60408401610b57565b60408201529392505050565b80358015158114610b6e57600080fd5b6001600160a01b038316815281356020808301919091526060820190610c1d908401610be6565b151560408301529392505050565b600060a08284031215610c3d57600080fd5b60405160a0810181811067ffffffffffffffff82111715610c6e57634e487b7160e01b600052604160045260246000fd5b604052610c7a83610b57565b815260208301516020820152610c9260408401610b57565b604082015260608301516060820152608083015160808201528091505092915050565b600060408284031215610cc757600080fd5b6040516040810181811067ffffffffffffffff82111715610cf857634e487b7160e01b600052604160045260246000fd5b604052610d0483610b57565b8152602083015160208201528091505092915050565b80358252610d2a60208201610be6565b151560208301525050565b6001600160a01b038316815260608101610abe6020830184610d1a565b600060208284031215610d6457600080fd5b610abe82610be6565b60008219821115610d8e57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220de48e66078d1d0c475a5004e22b08546dd06210edd4b5efbab863ed6e5ba99e164736f6c634300080c0033`,
  BytecodeLen: 4213,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
