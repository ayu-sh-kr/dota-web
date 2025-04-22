Have you ever faced the issue where all of a sudden your favourite ports are not
available on windows? This is a common issue that keeps bugging me once in while and I always
forgot how to fix them as they are of priority.

With this blog we will try to document the steps to fix this issue and keep track of all
possible solutions.

## Issue
The issue is that the ports are not available on windows. This can happen due to various reasons
like firewall settings, antivirus software, or even the Windows operating system itself. Most occurring one
is the addition of ports to exclusion list of windows firewall. This can happen when you are using a VPN or
when you have installed a new software that modifies the firewall settings.

**Check the excluded port range** Open command prompt as administrator and run the following command to check the excluded port range:
```bash
netsh int ipv4 show excludedportrange protocol=tcp
```

This will show you the excluded port range for TCP protocol. You can also check for UDP protocol by replacing `tcp` with `udp`.

**Remove and exclusion** To remove an exclusion, you can use the following command:
```bash
netsh int ipv4 delete excludedportrange protocol=tcp startport=START_PORT numberofports=NUMBER_OF_PORTS
```

Replace `START_PORT` with the starting port number and `NUMBER_OF_PORTS` with the number of ports you want to remove from the exclusion list.

**Restart services if needed** Some services, like Hyper-V or Windows NAT, may automatically reserve ports. You can try stopping them with:4
```bash
net stop winnat
```
or
```bash
net stop hns && net start hns
```

This may help free other ports


## Conclusion
In conclusion, the issue of ports being excluded on Windows can be resolved by checking the excluded port 
range and removing any unwanted exclusions. It is important to keep track of the ports that are being used 
by various services and applications to avoid any conflicts. If you are still facing issues, you can try restarting 
the services or even the system to see if that resolves the problem.

