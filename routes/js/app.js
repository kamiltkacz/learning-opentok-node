// replace these values with those generated in your TokBox Account
var apiKey = "47338091";
var sessionId = "2_MX40NzMzODA5MX5-MTYzMjE0NDEwOTEwOX5lZ3lBWkN5NHRTOGdTUkVranI3Rlkrc05-fg";
var token = "T1==cGFydG5lcl9pZD00NzMzODA5MSZzaWc9ZTVjZDA5ZDVlZTA4NGIzNTU3MmFiOTJlNGY2NzJlMjA0MjdkNGFmNjpzZXNzaW9uX2lkPTJfTVg0ME56TXpPREE1TVg1LU1UWXpNakUwTkRFd09URXdPWDVsWjNsQldrTjVOSFJUT0dkVFVrVnJhbkkzUmxrcmMwNS1mZyZjcmVhdGVfdGltZT0xNjMyMTUyNjAxJm5vbmNlPTAuMjkxOTcxOTc3NDI5NDg1NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYzMjIzOTAwMSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream

    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);

        // Create a person-three
        var publisher = OT.initPublisher('person-three', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
          }, handleError);

    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }