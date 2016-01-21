Each day it seems like there is a new data breach. Breaches have become so common that they are hardly news anymore. 
Frustratingly, nearly all data breaches are attributed to the same cause: SQL Injection. 
SQL injection now a decades-old problem, so I find it a bit puzzling that those developing SQL drivers don't take a more aggressive approach when trying to invent this.
There are advanced tools attempting to detect SQL injection on the server as it's happening, but I think there is (or should be) a much simpler solution: 
when writing a database query/command from an application quoted values should be forbidden/prevented by default.

###DangerouslyQueryUnsafe(..)###
Anytime you use a quoted identifier within a SQL query, the SQL driver should either automatically escape it, or throw a runtime error (dangerous SQL detected).
The following example is a straight forward query, is easy to write, but would still throw an exception.

<code>new sql.Request().query("select * from dbo.players where lastName='Bagwell'")</code>
							
If you know what you're doing, and you know your SQL is safe (the string is a constant), use an alternative work-around similiar to what is
used by client-side frameworks to prevent cross-site scripting:

<code>new sql.Request().dangerouslyQueryUnsafe("select * from dbo.players where lastName='Bagwell'")</code>

Would work fine and provide an alternative for those who *need* injectable SQL (and are hopefully escaping before running).

New tools on Microsoft Azure will warn you if the server "suspects" there are SQL injection attempts happening, but there is little to no effort made
to prevent injectable code from being written. , those who create SQL drivers, don't 
take SQL injection.

<p>Each day it seems like there is a new data breach. Breaches have become so common that they are hardly news anymore. 
Frustratingly, nearly all data breaches are attributed to the same cause: SQL Injection. 
SQL injection now a decades-old problem, so I find it a bit puzzling that those developing SQL drivers don't take a more aggressive approach when trying to prevent this.</p>