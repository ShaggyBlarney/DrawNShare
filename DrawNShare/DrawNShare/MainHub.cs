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
            
            Clients.All.broadcastMessage(name, image);
        }
    }
}