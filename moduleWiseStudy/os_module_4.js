import os from 'os';

// console.log('os', os);

// 1. os.platform(): Returns the OS platform (e.g., 'win32' for Windows, 'linux' for Linux, 'darwin' for macOS).
console.log('os.platform()', os.platform());
// Usage: Useful for writing cross-platform applications.

// 2. os.arch(): Returns the CPU architecture (e.g., 'x64', 'arm').
console.log('os.arch()', os.arch());
// Usage: Helps optimize code for specific architectures.

// 3. os.freemem(): Returns the amount of free system memory in bytes.
console.log('os.freemem()', os.freemem());
// Usage: Useful for monitoring system performance.

// 4. os.totalmem(): Returns the total system memory in bytes.
console.log('os.totalmem()', os.totalmem());
// Usage: Provides insights into the machine's capacity.

// 5. os.uptime(): Returns the system uptime in seconds.
console.log('os.uptime()', os.uptime());
// Usage: Commonly used in logging or monitoring tools || Useful for storing temporary data.

// 6. os.homedir(): Returns the home directory of the current user.
console.log('os.homedir()', os.homedir());
// Usage: Useful for locating user-specific files.

// 7. os.hostname(): Returns the hostname of the system.
console.log('os.hostname()', os.hostname());
// Usage: Useful for logging or identifying machines in networks.

// 8. os.networkInterfaces(): Returns an object with details about the network interfaces.
console.log('os.networkInterfaces()', os.networkInterfaces());
// Usage: Helps in network diagnostics or configuration.

// 9. os.cpus(): Returns details about each logical CPU/core.
console.log('os.cpus()', os.cpus());
// Usage: Helps optimize code for multi-core processi

// 10. os.tmpdir(): Returns the default directory for temporary files.

////////////////////////////////////////// result //////////////////////////////////////////////////////////////////////////////////////

// os.platform() win32
// os.arch() x64
// os.freemem() 3016273920
// os.totalmem() 16952647680
// os.uptime() 498207.312
// os.homedir() C:\Users\kalol
// os.hostname() KSPL_011
// os.networkInterfaces() {
//   WiFi: [
//     {
//       address: 'fe80::d8aa:80f8:65ad:38e4',
//       netmask: 'ffff:ffff:ffff:ffff::',
//       family: 'IPv6',
//       mac: '70:a6:cc:d8:a2:c0',
//       internal: false,
//       cidr: 'fe80::d8aa:80f8:65ad:38e4/64',
//       scopeid: 2
//     },
//     {
//       address: '192.168.1.20',
//       netmask: '255.255.255.0',
//       family: 'IPv4',
//       mac: '70:a6:cc:d8:a2:c0',
//       internal: false,
//       cidr: '192.168.1.20/24'
//     }
//   ],
//   'Loopback Pseudo-Interface 1': [
//     {
//       address: '::1',
//       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//       family: 'IPv6',
//       mac: '00:00:00:00:00:00',
//       internal: true,
//       cidr: '::1/128',
//       scopeid: 0
//     },
//     {
//       address: '127.0.0.1',
//       netmask: '255.0.0.0',
//       family: 'IPv4',
//       mac: '00:00:00:00:00:00',
//       internal: true,
//       cidr: '127.0.0.1/8'
//     }
//   ]
// }
// os.cpus() [
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//     speed: 3110,
//     times: {
//       user: 14602625,
//       nice: 0,
//       sys: 6193375,
//       idle: 293105625,
//       irq: 608125
//     }
//   },
// ]
