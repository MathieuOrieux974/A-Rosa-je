package com.epsi.fr.arosaje.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private static final String SECRET_KEY= "ZCzO48tlE8hgcTd2m4kFYVZcUQv76aKovUHseXba5m3qDJ5zTpyq8bNwGqpETiynB1s0d1db3Pm/39RodQLHNuKW0nlhUQg3y9mteHGSUOEl+CTA3n7Arw+La/+uvLIaUqx5BGikgs/I41XlyAjvit6zJZr9g6TGLZMZTVvgm2ldy1H3nL0dbyyGxxtJ5lf2n8U3thff+ti6eqmcsFcNHjITcRBcGFY9sNS03eIU/wnWFBNn3jDDWds86pDiiKBfi2RjMUPOqPuvTZ53Q8REnq4Ri7AqH/bz2ZcCMqmABTSaOesjV6NxP2pTftt07Ncfe12NyMCEG7lCePID/oO6TbN7iGDW9y5Y4p0QFybkFWk=\n";
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public<T> T extractClaim(String token, Function<Claims, T>  claimsResolver) {
        final Claims claims= extractAllClaims((token));
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }
    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 1000*60*24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username=extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

    }

    private Key getSignInKey() {
        byte[] keyBytes= Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
