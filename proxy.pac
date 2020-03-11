function FindProxyForURL(url, host)
{
  alert ("using PAC");
	return "PROXY 192.168.137.1:1080; DIRECT";
}
