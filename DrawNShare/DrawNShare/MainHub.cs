using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace DrawNShare
{
    public class MainHub : Hub
    {
        public void Send(string name, string image)
        {
            DateTime time = DateTime.Now;
            string timestamp = time.ToString("MM/dd/yyyy HH:mm:ss");
            
            Clients.All.broadcastMessage(name, image, timestamp);
        }
    }
}
