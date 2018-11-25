<?php

// /src/AppBundle/Event/Listener/JWTCreatedListener.php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\HttpFoundation\RequestStack;

class JWTCreatedListener
{
    /**
 * @param RequestStack $requestStack
 */
public function __construct(RequestStack $requestStack)
{
    $this->requestStack = $requestStack;
}

    /**
     * Replaces the data in the generated
     *
     * @param JWTCreatedEvent $event
     *
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        /** @var $user \App\Entity\AppUser */
        $user = $event->getUser();

        $request = $this->requestStack->getCurrentRequest();
    
        $payload       = $event->getData();
        $payload['userFirstname'] = $user->getFirstname();
        $payload['userId'] = $user->getId();
        $payload['userSlug'] = $user->getSlug();
    
        $event->setData($payload);
        
        $header        = $event->getHeader();
        $header['cty'] = 'JWT';
    
        $event->setHeader($header);
    }
}